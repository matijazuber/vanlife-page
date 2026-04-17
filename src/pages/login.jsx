import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const location = useLocation();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(`${location.state ? location.state.path : `/host`}`, {
          replace: true,
        });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setStatus("idle");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="login-container">
        {location.state?.message ? (
          <h3 style={{ fontFamily: "Inter", color: "red" }}>
            {" "}
            {location.state.message}{" "}
          </h3>
        ) : null}
        <h1>Sign in to your account</h1>
        {error?.message && (
          <h3 className="login-first">{location.state.message}</h3>
        )}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email address"
            value={loginFormData.email}
          ></input>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            value={loginFormData.password}
          ></input>
          <button disabled={status === "submitting"}>
            {status === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
