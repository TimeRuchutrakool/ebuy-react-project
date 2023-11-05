import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RedirectIfAuthen({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) return <Navigate to="/" />;

  return children;
}

export default RedirectIfAuthen;
