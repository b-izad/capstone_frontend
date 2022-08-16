import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import paws from "../images/paws.png";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    profile: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/users/signup";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
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
    <div>
      <div className="d-flex align-items-center justify-content-center mt-7">
        <form
          className="login col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-3"
          onSubmit={handleSubmit}
        >
          <h3>Create an Account</h3>
          <div className="mb-3 mt-5">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
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
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
          </div>
          {error && <div>{error}</div>}
          <div className="d-grid">
            <button type="submit" className="btn btn-outline-dark">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already a member? <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
      <div className="d-flex align-items-center justify-content-center fixed-bottom ">
        <img
          className="img-fluid center-block w-25"
          src={paws}
          alt="paw prints"
        />
      </div>
    </div>
  );
};

export default SignUp;
