import { Outlet, Navigate } from "react-router-dom";

const AuthRequired = () => {
  const authenticated = false;

  if (!authenticated) {
    return <Navigate to="/login"></Navigate>;
  }
  return <Outlet></Outlet>;
};

export default AuthRequired;
