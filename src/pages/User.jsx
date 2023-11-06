import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";

export default function User() {
  const [click, setClick] = useState("personal");
  const [mode, setMode] = useState("EDIT");
  return (
    <div className="flex flex-row ">
      <div>
        <SidebarProfile setMode={setMode} />
      </div>
      {mode === "EDIT" ? <EditProfile /> : ""}
      {mode === "SHOP" ? <ProductProfile /> : ""}
    </div>
  );
}
