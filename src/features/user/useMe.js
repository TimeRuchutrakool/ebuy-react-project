import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function useMe() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was use outside AuthContextProvider");
  return context;
}

export default useMe;
