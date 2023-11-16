import { useState } from "react";
import SidebarProfile from "../components/SideBarProfile";
import EditProfile from "../components/EditProfile";
import ProductProfile from "../components/ProductProfile";
import WishlistProfile from "../components/WishlistProfile";
import Orderhistory from "../components/Orderhistory";
import MyOrders from "../components/MyOrders";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

export default function User() {
  const [isLoading, setIsLoading] = useState(false);
  const { Modes } = useParams();
  const [mode, setMode] = useState("");
  if (isLoading) return <Loading />;

  if (Modes !== mode) {
    setMode(Modes);
  }

  return (
    <div className="flex flex-row gap-[1px]">
      <div className="h-full">
        <SidebarProfile mode={mode} setIsLoading={setIsLoading} />
      </div>
      {mode === "SHOP" ? <ProductProfile /> : ""}
      {mode === "EDIT" ? <EditProfile /> : ""}
      {mode === "WISHLIST" ? <WishlistProfile /> : ""}
      {mode === "ORDERHISTORY" ? <Orderhistory /> : ""}
      {mode === "MYORDERS" ? <MyOrders /> : ""}
    </div>
  );
}
