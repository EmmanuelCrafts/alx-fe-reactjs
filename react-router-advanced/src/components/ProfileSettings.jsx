// ProfileSettings.jsx
import React from "react";

const ProfileSettings = ({ settings }) => (
  <div>
    <h2>Profile Settings</h2>
    <p>Show Email: {settings.privacy.showEmail ? "Yes" : "No"}</p>
    <p>Show Profile Picture: {settings.privacy.showProfilePicture ? "Yes" : "No"}</p>
    <p>Email Notifications: {settings.notifications.email ? "On" : "Off"}</p>
    <p>SMS Notifications: {settings.notifications.sms ? "On" : "Off"}</p>
    <p>Theme: {settings.theme}</p>
  </div>
);

export default ProfileSettings;
