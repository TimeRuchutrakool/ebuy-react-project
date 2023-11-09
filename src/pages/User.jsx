import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";

export default function User() {
  const [click, setClick] = useState("personal");
  const [mode, setMode] = useState("SHOP");
  return (
    <div className="flex flex-row gap-[1px]">
      <div className="h-full">
        <SidebarProfile setMode={setMode} mode={mode} />
      </div>
      {mode === "SHOP" ? <ProductProfile /> : ""}
      {mode === "EDIT" ? <EditProfile /> : ""}
    </div>
  );
}
