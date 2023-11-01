import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../store/slices/userSlice";

function AppLayout() {
  const { formModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      {formModal.form && <Modal>{formModal.form}</Modal>}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
