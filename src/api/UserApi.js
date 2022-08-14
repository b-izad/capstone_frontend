import axios from "axios";

// export const getPosts = (posts, setPosts) => {
//   axios
//     .get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
//     .then((response) => {
//       console.log("response: ", response.data);
//       setPosts(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const addUser = (
  username,
  password,
  email,
  profile,
  users,
  setUsers
) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
      username,
      password,
      email,
      profile,
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
      setUsers([...users, newUser]);
    })
    .catch((error) => console.log(error.response.data));
};
