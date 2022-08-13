import React, { useState } from "react";
import PropTypes from "prop-types";
import { addPost } from "../api/PostAPi";

const NewPostForm = ({ posts, setPosts }) => {
  const [formFields, setFormFields] = useState({
    title: "",
    author: "",
    content: "",
  });

  const onTitleChange = (event) => {
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onContentChange = (event) => {
    setFormFields({ ...formFields, content: event.target.value });
  };

  const onAuthorChange = (event) => {
    setFormFields({ ...formFields, author: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addPost(
      formFields.title,
      formFields.author,
      formFields.content,
      posts,
      setPosts
    );

    setFormFields({
      title: "",
      author: "",
      content: "",
    });
  };

  return (
    <form className="form-box" onSubmit={onFormSubmit}>
      <label htmlFor="postTitle">Title:</label>
      <input
        name="formTitle"
        value={formFields.title}
        onChange={onTitleChange}
        required
      />
      <label htmlFor="postAuthor">author:</label>
      <input
        name="postAuthor"
        value={formFields.author}
        onChange={onAuthorChange}
        required
      />
      <label htmlFor="postContent">Content:</label>
      <input
        name="formContent"
        value={formFields.content}
        onChange={onContentChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

NewPostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};
export default NewPostForm;
