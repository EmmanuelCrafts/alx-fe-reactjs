// ProfileDetails.jsx
import React from "react";

const ProfileDetails = ({ details }) => (
  <div>
    <h2>Profile Details</h2>
    <p>Full Name: {details.fullName}</p>
    <p>Username: {details.username}</p>
    <p>Email: {details.email}</p>
    <p>Phone: {details.phone}</p>
    <p>Bio: {details.bio}</p>
  </div>
);

export default ProfileDetails;
