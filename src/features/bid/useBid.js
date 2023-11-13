import { useContext } from "react";
import { BidContext } from "../../context/BidContext";

export function useBid() {
  const context = useContext(BidContext);
  if (context === undefined)
    throw new Error("BidContext was used outside BidContextProvider");
  return context;
}
