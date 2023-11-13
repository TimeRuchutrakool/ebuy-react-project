import { useState } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";
import { BACKEND_URL } from "../config/env";

export const BidContext = createContext();

function BidContextProvider({ children }) {
  const [bidSocket] = useState(() => io.connect(BACKEND_URL + "/bid"));
  return (
    <BidContext.Provider value={{bidSocket}}>{children}</BidContext.Provider>
  );
}

export default BidContextProvider;
