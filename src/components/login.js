import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cat from "../images/cat.jpg";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/users/login";
      const { data: res } = await axios.post(url, data);
      console.log(data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      console.log(res.data);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-7">
        <form
          className="login col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-3"
          onSubmit={handleSubmit}
        >
          <h3>Sign In</h3>
          <div className="mb-3 mt-5">
            <label>Email address</label>
            <input
              name="email"
              className="form-control"
              type="email"
              onChange={handleChange}
              value={data.email}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              className="form-control"
              type="password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>
          {error && <div>{error}</div>}
          <div className="d-grid">
            <button type="submit" className="btn btn-outline-dark">
              Sign In
            </button>
          </div>
          <p className="forgot-password text-right">
            New Here? <Link to="/signup">Sign Up!</Link>
          </p>
        </form>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img className="img-fluid center-block w-25" src={cat} alt="Cat" />
      </div>
    </>
  );
};

export default Login;
