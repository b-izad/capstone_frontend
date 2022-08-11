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

export const addPost = (title, author, content, posts, setPosts) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
      title,
      author,
      content,
    })
    .then((result) => {
      console.log("result: ", result);
      console.log(result.data);
      const newPost = {
        post_id: result.data.post.post_id,
        title: result.data.post.title,
        author: result.data.post.author,
        content: result.data.post.content,
      };
      setPosts([...posts, newPost]);
    })
    .catch((error) => console.log(error.response.data));
};
