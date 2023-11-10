import { useState } from "react";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";

export default function User() {
  const [mode, setMode] = useState("EDIT");
  console.log(mode);
  return (
    <div className="flex flex-row ">
      <div className="h-full">
        <SidebarProfile setMode={setMode} />
      </div>

      {mode === "EDIT" ? <EditProfile /> : ""}
      {mode === "SHOP" ? <ProductProfile /> : ""}
    </div>
  );
}
