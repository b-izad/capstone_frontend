import { useState } from "react";
import axios from "axios";

const Signup = () => {
  //here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
  //need some sort of onSubmit function for Button, which would also link to appropriate page
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    profile: "",
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createUser = (array) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        name: array.name,
        password: array.password,
        email: array.email,
        profile: array.profile,
      })
      .then((result) => {
        console.log("result: ", result);
        console.log(result.data);
        const newUser = {
          user_id: result.data.user.user_id,
          password: result.data.user.password,
          email: result.data.user.email,
          profile: result.data.user.profile,
        };
        setInputs([...inputs, newUser]);
      })
      .catch((error) => console.log(error.response.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(inputs);
    setInputs({
      profile: "",
      username: "",
      password: "",
    });

    return (
      <form onSubmit={handleSubmit}>
        <div className="registerForm" controlId="formUsername">
          <label>
            <input
              type="text"
              name="Username"
              onChange={(e) => onChange(e)}
              value={inputs.username}
              placeholder="Username"
            />
          </label>
        </div>
        <div className="registerForm" controlId="formPassword">
          <label>
            <input
              type="text"
              name="password"
              onChange={(e) => onChange(e)}
              value={inputs.password}
              placeholder="password"
              required
            />
          </label>
        </div>

        <div className="registerForm" controlId="formProfile">
          <label>
            <input
              type="text"
              name="profile"
              onChange={(e) => onChange(e)}
              value={inputs.profile}
              placeholder="profile"
              required
            />
          </label>
        </div>

        <button
          onClick={this.handleSubmit}
          variant="success"
          type="submit"
          className="createUser"
        >
          Create New User
        </button>
      </form>
    );
  };
};

export default Signup;
