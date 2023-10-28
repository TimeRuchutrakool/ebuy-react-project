import { useContext } from "react";
import { HamburgerMenuContext } from "../context/hamburgerMenuContext";

export function useHamburgerMenu() {
  const context = useContext(HamburgerMenuContext);
  if (context === undefined)
  throw new Error(
      "hamburgerContext was used outside HamburgerContextProvider"
    );
  return context;
}
