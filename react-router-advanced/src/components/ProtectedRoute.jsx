import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // check if user is logged in

  if (!user) return <Navigate to="/login" replace />; // not logged in → redirect
  return children; // logged in → show the page
};

export default ProtectedRoute;
