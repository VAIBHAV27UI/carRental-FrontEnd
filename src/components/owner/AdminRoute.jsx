import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
    const token = sessionStorage.getItem("adminToken")

      if (!token) {
    return <Navigate to="/owner/login" replace />;
  }


  return <Outlet />;
}

export default AdminRoute