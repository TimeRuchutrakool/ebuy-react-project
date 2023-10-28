import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      layout
      <Outlet />
    </div>
  );
}

export default AppLayout;
