import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <h2>Loading...</h2>;
  }

  if (user && isAdmin) {
    return children;
  }

  //   return <Navigate state={location.pathname} to="/login"></Navigate>;
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
