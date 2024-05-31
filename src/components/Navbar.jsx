import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
        style={{
          color: "white",
          textDecorationLine: "none",
          paddingLeft: "80px",
        }}
        to={"/add"}
      >
        Add
      </NavLink>
      <NavLink
        style={{ color: "white", textDecorationLine: "none" }}
        to={"/post"}
      >
        Posts
      </NavLink>
      <NavLink
        style={{ color: "white", textDecorationLine: "none" }}
        to={"/edit"}
      >
        Edit
      </NavLink>
      <NavLink
        style={{
          color: "white",
          textDecorationLine: "none",
          paddingRight: "80px",
        }}
        to={"/detail"}
      >
        Detail info
      </NavLink>
    </div>
  );
};

export default Navbar;
