import { useState } from "react";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
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
        <h1>Sign in to your account</h1>
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
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
