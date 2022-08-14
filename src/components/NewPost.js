import React, { useState } from "react";
// import PropTypes from "prop-types";
import { addPost } from "../api/PostAPi";

const NewPost = ({ posts, setPosts }) => {
  const [formFields, setFormFields] = useState({
    title: "",
    zipcode: "",
    content: "",
  });

  const onTitleChange = (event) => {
    setFormFields({ ...formFields, title: event.target.value });
  };

  const onContentChange = (event) => {
    setFormFields({ ...formFields, content: event.target.value });
  };

  const onAuthorChange = (event) => {
    setFormFields({ ...formFields, zipcode: event.target.value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    addPost(
      formFields.title,
      formFields.zipcode,
      formFields.content,
      posts,
      setPosts
    );

    setFormFields({
      title: "",
      zipcode: "",
      content: "",
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-7">
      <form
        className="col-xs-12 col-xs-offset-0 col-sm-6 col-sm-offset-3"
        onSubmit={onFormSubmit}
      >
        <h3>Create a post</h3>
        <div className="form-outline mt-5 mb-4">
          <label className="form-label" for="postTitle">
            Title
          </label>
          <input
            className="form-control"
            name="postTitle"
            value={formFields.title}
            onChange={onTitleChange}
            required
          />
          <label className="form-label" for="postZipcode">
            Zipcode
          </label>
          <input
            className="form-control"
            name="postZipcode"
            value={formFields.author}
            onChange={onAuthorChange}
            required
          />

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4">
            <label className="form-label" for="postContent">
              Message
            </label>
            <textarea
              className="form-control"
              id="postContent"
              rows="4"
              name="formContent"
              value={formFields.content}
              onChange={onContentChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-outline-dark">
              Add Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
