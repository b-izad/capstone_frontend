// import axios from "axios";
// import { addUser } from "../api/UserApi";

// const SignUp = (users, setUsers) => {
//here would be logic for holding state of input fields (which are FormControls in Bootstrap React)
//need some sort of onSubmit function for Button, which would also link to appropriate page
// const [inputs, setInputs] = useState({
//   username: "",
//   email: "",
//   password: "",
// });

// const onUserNameChange = (event) => {
//   setInputs({ ...inputs, [event.target.username]: event.target.value });
// };
// const onEmailChange = (event) => {
//   setInputs({ ...inputs, [event.target.email]: event.target.value });
// };
// const onPasswordChange = (event) => {
//   setInputs({ ...inputs, [event.target.password]: event.target.value });
// };
// const onProfileChange = (e) => {
//   setInputs({ ...inputs, [e.target.profile]: e.target.value });
// };

// const createUser = (array) => {
//   axios
//     .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
//       name: array.name,
//       password: array.password,
//       email: array.email,
//       profile: array.profile,
//     })
//     .then((result) => {
//       console.log("result: ", result);
//       console.log(result.data);
//       const newUser = {
//         user_id: result.data.user.user_id,
//         password: result.data.user.password,
//         email: result.data.user.email,
//         profile: result.data.user.profile,
//       };
//       setInputs([...inputs, newUser]);
//     })
//     .catch((error) => console.log(error.response.data));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   createUser(inputs);
//   setInputs({
//     profile: "",
//     username: "",
//     password: "",
//   });
// };

//   const onInputSubmit = (event) => {
//     event.preventDefault();

//     addUser(inputs.username, inputs.email, inputs.password, users, setUsers);

//     setInputs({
//       username: "",
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <form onSubmit={onInputSubmit}>
//       <div className="registerForm" controlId="formUsername">
//         <label>
//           <input
//             type="text"
//             name="Username"
//             onChange={onUserNameChange}
//             value={inputs.username}
//             placeholder="Username"
//             required
//           />
//         </label>
//       </div>
//       <div className="registerForm" controlId="formUsername">
//         <label>
//           <input
//             type="text"
//             name="Email"
//             onChange={onEmailChange}
//             value={inputs.email}
//             placeholder="Email"
//             required
//           />
//         </label>
//       </div>
//       <div className="registerForm" controlId="formPassword">
//         <label>
//           <input
//             type="text"
//             name="password"
//             onChange={onPasswordChange}
//             value={inputs.password}
//             placeholder="password"
//             required
//           />
//         </label>
//       </div>

//       {/* <div className="registerForm" controlId="formProfile">
//         <label>
//           <input
//             type="text"
//             name="profile"
//             onChange={onProfileChange}
//             value={inputs.profile}
//             placeholder="profile"
//             required
//           />
//         </label>
//       </div> */}

//       <button
//         type="submit"
//         onClick={onInputSubmit}
//         variant="success"
//         className="createUser"
//       >
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignUp;
