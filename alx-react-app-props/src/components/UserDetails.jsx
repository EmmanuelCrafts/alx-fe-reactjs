import React, {useContext} from "react";
import { userContext } from "./UserContext";
function UserDetails() {
    const user = useContext(userContext);
    return (
      <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  
  export default UserDetails;