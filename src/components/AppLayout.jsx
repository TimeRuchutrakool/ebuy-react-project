import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import HamburgerMenuContextProvider from "../context/hamburgerMenuContext";
function AppLayout() {
  return (
    <>
      <HamburgerMenuContextProvider>
        <Header />
      </HamburgerMenuContextProvider>
      <div style={{ height: "200vh" }}>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
