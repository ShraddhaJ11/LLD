import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  // write authentication logic here
  const isAuthenticated = true;
  // outlet will render all the childrens in the protected route
  // outlet is a place where children can render
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectRoute;
