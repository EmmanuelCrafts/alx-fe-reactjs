import { Navigate } from "react-router-dom";
const isAUthenticated = () => {
    // Simulate an authentication check (e.g., check a token in localStorage)
    return localStorage.getItem("authToken") ? true : false;
};

const ProtectedRoute = ({ children }) => {
    if (!isAUthenticated) return <Navigate to='/login' replace />;
    return children;
};

export default ProtectedRoute;