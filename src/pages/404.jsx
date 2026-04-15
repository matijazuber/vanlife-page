import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div style={{ height: "100vh", margin: "30px" }}>
        <h1 style={{ fontFamily: "Inter" }}>
          Sorry, the page you were looking for was not found
        </h1>

        <div style={{ marginTop: "50px" }}>
          <Link
            style={{
              textDecoration: "none",
              borderRadius: "2px",
              padding: "20px 30px",
              fontFamily: "Inter",
              backgroundColor: "#161616",
              color: "white",
            }}
            to="/"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
