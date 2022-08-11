import React from "react";
import PropTypes from "prop-types";

const Post = ({ content }) => {
  return (
    <>
      <p>{content}</p>
    </>
  );
};

Post.propTypes = {
  post_id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
