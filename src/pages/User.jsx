import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";
import WishlistProfile from "../components/WishlistProfile";
import Orderhistory from "../components/Orderhistory";
import MyOrders from "../components/MyOrders";

export default function User() {
  const [mode, setMode] = useState("SHOP");
  return (
    <div className="flex flex-row gap-[1px]">
      <div className="h-full">
        <SidebarProfile setMode={setMode} mode={mode} />
      </div>
      {mode === "SHOP" ? <ProductProfile /> : ""}
      {mode === "EDIT" ? <EditProfile /> : ""}
      {mode === "WISHLIST" ? <WishlistProfile /> : ""}
      {mode === "ORDERHISTORY" ? <Orderhistory /> : ""}
      {mode === "MYORDERS" ? <MyOrders /> : ""}
    </div>
  );
}
