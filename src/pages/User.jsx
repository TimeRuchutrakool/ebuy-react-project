import { useState } from "react";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";
import WishlistProfile from "../components/WishlistProfile";
import Orderhistory from "../components/Orderhistory";
import MyOrders from "../components/MyOrders";
import Loading from "../components/Loading";

export default function User() {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState("SHOP");
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-row gap-[1px]">
      <div className="h-full">
        <SidebarProfile
          setMode={setMode}
          mode={mode}
          setIsLoading={setIsLoading}
        />
      </div>
      {mode === "SHOP" ? <ProductProfile /> : ""}
      {mode === "EDIT" ? <EditProfile /> : ""}
      {mode === "WISHLIST" ? <WishlistProfile /> : ""}
      {mode === "ORDERHISTORY" ? <Orderhistory /> : ""}
      {mode === "MYORDERS" ? <MyOrders /> : ""}
    </div>
  );
}
