import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../store/slices/userSlice";
import { getAccessToken } from "../utils/token";

function AppLayout() {
  const { formModal } = useModal();
  const dispatch = useDispatch();
  const accessToken = getAccessToken() ?? undefined;
  useEffect(() => {
    dispatch(getMe(accessToken));
  }, [dispatch, accessToken]);

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
