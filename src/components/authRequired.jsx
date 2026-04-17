import { Outlet, Navigate, useLocation } from "react-router-dom";

const AuthRequired = () => {
  const isLoggedIn = localStorage.getItem("loggedin");
  const { pathname } = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must log in first", path: pathname }}
        replace
      ></Navigate>
    );
  }
  return <Outlet></Outlet>;
};

export default AuthRequired;
