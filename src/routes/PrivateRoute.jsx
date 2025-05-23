import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (user && user?.email) {
    return children;
  }

  //   return <Navigate state={location.pathname} to="/login"></Navigate>;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
