import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = ({ postId, author, title, content }) => {
  <>
    {PostList.map((post) => {
      return (
        <Post
          key={post.post_id}
          postId={post.post_id}
          author={post.author}
          title={post.title}
          content={post.content}
        />
      );
    })}
  </>;
};

PostList.propTypes = {
  Posts: PropTypes.arrayOf({
    post_id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default PostList;
