import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users/signin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          className="form-control"
          placeholder="Enter email"
          type="email"
          onChange={handleChange}
          value={data.email}
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter password here"
          onChange={handleChange}
          value={data.password}
          required
        />
      </div>
      {error && <div>{error}</div>}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sing In
        </button>
      </div>
      <p className="forgot-password text-right">
        New Here? <Link to="/signup">Sign Up!</Link>
      </p>
    </form>

    // {/* <div>
    //   <h1>New Here ?</h1>
    //   <Link to="/Signup">
    //     <button type="button">Sing Up</button>
    //   </Link>
    // </div> */}
  );
};

export default Login;
