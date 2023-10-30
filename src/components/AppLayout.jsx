import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
