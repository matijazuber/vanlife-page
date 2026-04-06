import { Link } from "react-router-dom";

const Header = () => {
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
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: "23px",
            gap: "30px",
          }}
        >
          <Link className="host-header" to="/host">
            Host
          </Link>
          <Link className="about-header" to="/about">
            About
          </Link>
          <Link className="vans-header" to="/vans">
            Vans
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
