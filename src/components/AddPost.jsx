import React, { useState } from "react";
import { API } from "../helpers/const";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [post, setPost] = useState({ body: "", author: "", image: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.body || !post.author) {
      alert("Заполните данные");
      return;
    }
    addPost(post);
    navigate("/post");
    setPost({ body: "", author: "", image: "" });
  };

  const addPost = (newPost) => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newPost),
    });
  };

  return (
    <div className="container">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={post.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Body"
            rows="3"
            name="body"
            value={post.body}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={post.image}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
