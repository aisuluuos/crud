import React from "react";
import { Button } from "react-bootstrap";
import { API } from "../helpers/const";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";
const PostCard = ({ id, author, body, image, liked, getPosts }) => {
  const handleLikeChange = (postId, liked) => {
    console.log(`Пост с id ${postId} ${liked ? "поставлен" : "снят"} лайк`);
    getPosts();
  };

  const deletePost = async () => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    getPosts();
  };

  return (
    <div>
      <div className="post">
        <h5>{author}</h5>
        <img src={image} alt="" />
        <p>{body}</p>
        <LikeButton
          id={id}
          initialLiked={liked}
          onLikeChange={handleLikeChange}
        />
        <Button onClick={() => deletePost(id)} variant="outline-danger">
          Delete
        </Button>
        <Link to={`/edit/${id}`}>
          <Button variant="outline-warning">Edit</Button>
        </Link>
        <Link to={`/detail/${id}`}>
          <Button variant="outline-info">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
