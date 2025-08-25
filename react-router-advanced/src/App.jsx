import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
// Sample data
const userProfile = { id: 1, name: "Jane Doe", username: "janedoe", email: "jane.doe@example.com" };
const profileDetails = { fullName: "Jane Doe", username: "janedoe", email: "jane.doe@example.com", phone: "+1 555 123 4567", bio: "Frontend developer passionate about React." };
const profileSettings = { privacy: { showEmail: false, showProfilePicture: true }, notifications: { email: true, sms: false }, theme: "dark" };

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile user={userProfile} />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
