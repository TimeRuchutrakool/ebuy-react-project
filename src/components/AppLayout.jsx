import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
function AppLayout() {
  const { formModal } = useModal();

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
