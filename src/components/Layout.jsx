import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../footer";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout;
