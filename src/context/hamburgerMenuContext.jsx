import { useState } from "react";
import { createContext } from "react";

export const HamburgerMenuContext = createContext();

export default function HamburgerMenuContextProvider({ children }) {
  const [showHamburger, setShowHamburger] = useState();
  return (
    <HamburgerMenuContext.Provider value={{ showHamburger, setShowHamburger }}>
      {children}
    </HamburgerMenuContext.Provider>
  );
}
