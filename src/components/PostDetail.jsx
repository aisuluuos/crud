import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API } from "../helpers/const";
import Button from "react-bootstrap/Button";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();
      setPost(data);
    };

    getPosts();
  }, [id]);

  return (
    <div>
      <div className="details">
        <h5>{post.author}</h5>
        <img src={post.image} alt="" />
        <p>{post.body}</p>
        <Link to={`/edit/${id}`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
