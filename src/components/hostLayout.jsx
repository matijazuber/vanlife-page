import { NavLink, Outlet } from "react-router-dom";
const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyles : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
export default HostLayout;
