import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost";
import PostsList from "../components/PostsList";
import EditPost from "../components/EditPost";
import PostDetail from "../components/PostDetail";
import LikeButton from "../components/LikeButton";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddPost />} />
      <Route path="/post" element={<PostsList />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/detail/:id" element={<PostDetail />} />
      <Route element={<LikeButton />} />
    </Routes>
  );
};

export default MainRoutes;
