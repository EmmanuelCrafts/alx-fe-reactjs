// Profile.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>

      {/* Navigation for sub-sections */}
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
