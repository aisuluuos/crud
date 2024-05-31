import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import PostCard from "./PostCard";
const PostsList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "50px",
        flexWrap: "wrap",
      }}
    >
      {posts.map((post) => (
        <PostCard
          key={post.id}
          {...post}
          getPosts={getPosts}
          handleLikeChange={getPosts}
        />
      ))}
    </div>
  );
};
export default PostsList;
