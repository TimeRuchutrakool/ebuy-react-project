import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useModal from "../hooks/useModal";

function RedirectIfAuthen({ children }) {
  const { user } = useSelector((store) => store.user);
  const { dispatch: modal } = useModal();
  useEffect(() => {
    if (!user) modal({ type: "close" });
  }, [modal, user]);
  if (!user) return <Navigate to="/" />;

  return children;
}

export default RedirectIfAuthen;
