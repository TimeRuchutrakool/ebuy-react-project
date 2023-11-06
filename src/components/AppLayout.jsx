import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../store/slices/userSlice";
import ChatButton from "../features/chat/ChatButton";
import { getCart } from "../store/slices/cartSlice";

function AppLayout() {
  const { formModal } = useModal();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (user) dispatch(getCart());
  }, [dispatch, user]);

  return (
    <>
      {formModal.form && <Modal>{formModal.form}</Modal>}
      <Header />
      <Outlet />
      <Footer />
      {user && <ChatButton />}
    </>
  );
}

export default AppLayout;
