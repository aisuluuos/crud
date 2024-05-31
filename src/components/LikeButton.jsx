import React, { useState } from "react";
import { API } from "../helpers/const";
import { Button } from "react-bootstrap";

const LikeButton = ({ id, initialLiked, onLikeChange }) => {
  const [liked, setLiked] = useState(initialLiked);

  const handleLike = async () => {
    try {
      const res = await fetch(`${API}/${id}/like`, {
        method: liked ? "DELETE" : "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      if (res.ok) {
        console.log(liked);
        setLiked(!liked);
        onLikeChange(id, !liked);
      } else {
        console.error("Ошибка при выполнении запроса:", res.status);
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  return (
    <Button onClick={handleLike} variant={liked ? "danger" : "primary"}>
      {liked ? "Unlike" : "Like"}
    </Button>
  );
};

export default LikeButton;
