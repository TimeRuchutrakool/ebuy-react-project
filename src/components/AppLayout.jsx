import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
function AppLayout() {
  return (
    <>
      <Header />
      <div style={{height:'200vh'}}>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
