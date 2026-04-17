import { NavLink, Link } from "react-router-dom";
import loginIcon from "../assets/Icon.svg";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("loggedin");
  };
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <header className="headerDiv">
        <Link
          style={{
            lineHeight: "40px",
            fontSize: "25px",
            verticalAlign: "middle",
            fontFamily: "Inter",
            fontWeight: "900",
            color: "black",
            textDecoration: "none",
          }}
          to="/"
        >
          #VANLIFE
        </Link>
        <nav
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: "23px",
            gap: "30px",
          }}
        >
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="host-header"
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="about-header"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="vans-header"
            to="/vans"
          >
            Vans
          </NavLink>
          <NavLink to="/login">
            <img src={loginIcon} style={{ width: "20px" }}></img>
          </NavLink>
          <button onClick={logout}>X</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
