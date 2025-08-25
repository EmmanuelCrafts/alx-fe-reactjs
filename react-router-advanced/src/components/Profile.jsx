// Profile.jsx
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
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
      <Routes>
         <Route path="details" element={<ProfileDetails details={details} />} />
         <Route path="settings" element={<ProfileSettings settings={settings} />} />
    </Routes>
    </div>
  );
};

export default Profile;
