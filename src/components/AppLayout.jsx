import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import BlurBlackground from "./BlurBlackground";
function AppLayout() {
  const { formModal } = useModal();

  return (
    <>
      {formModal.form && (
        <BlurBlackground>
          <Modal>{formModal.form}</Modal>
        </BlurBlackground>
      )}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
