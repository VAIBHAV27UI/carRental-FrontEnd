import { Navigate, Outlet, replace } from "react-router-dom";

const ProtectedRoute = () => {
  const adminToken = localStorage.getItem("adminToken");
  adminToken ? <Outlet /> : <Navigate to="/owner/login" replace />;
};
