import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../helpers/const";
import Button from "react-bootstrap/Button";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const getPosts = async (id) => {
    const res = await fetch(`${API}/${id}`);
    const data = await res.json();
    setPost(data);
    setAuthor(data.author);
    setBody(data.body);
  };

  useEffect(() => {
    getPosts(id);
  }, [id]);

  const handleSave = async () => {
    if (!author && !body) {
      alert("Please fill in all fields!");
      return;
    }

    const editedPost = {
      author: author,
      body: body,
    };

    await editPost(id, editedPost);
    navigate("/post");
  };

  const editPost = async (id, post) => {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <div>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <Button onClick={handleSave}>Save</Button>
    </div>
  );
};

export default EditPost;
