import axios from "axios";

export const getPosts = (posts, setPosts) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
    .then((response) => {
      console.log("response: ", response.data);
      setPosts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addPost = (title, zipcode, content, posts, setPosts) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/posts/createpost`, {
      title,
      zipcode,
      content,
    })
    .then((result) => {
      console.log("result: ", result);
      console.log(result.data);
      const newPost = {
        post_id: result.post.post_id,
        title: result.post.title,
        zipcode: result.post.zipcode,
        content: result.post.content,
      };
      setPosts([...posts, newPost]);
    })
    .catch((error) => console.log(error.response.data));
};
