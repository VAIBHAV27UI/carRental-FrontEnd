// AdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ loggedIn }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  return token && loggedIn ? <Outlet /> : <Navigate to="/owner/login" />;
};

export default AdminRoute;
