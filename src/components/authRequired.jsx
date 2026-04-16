import { Outlet, Navigate } from "react-router-dom";

const AuthRequired = () => {
  const authenticated = false;

  if (!authenticated) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first" }}
      ></Navigate>
    );
  }
  return <Outlet></Outlet>;
};

export default AuthRequired;
