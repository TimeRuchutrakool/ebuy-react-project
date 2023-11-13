import React from "react";
import WishlistCard from "./WishlistCard";

export default function WishlistProfile() {
  return (
    <div className="mt-24 w-full">
      <h1 className="p-4 pl-8 text-green-900 border-t shadow-md ">
        รายการโปรด
      </h1>
      <div className="grid grid-cols-5 place-items-center pt-8 pl-2">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
    </div>
  );
}
