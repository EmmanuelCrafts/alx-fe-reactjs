import { useState } from "react";
const RegistrationForm = () => {
    const [FormData, SetFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    
     const { username, email, password } = FormData;

    const handleChange = (e) => {
        const { name, value} = e.target ;
        SetFormData((prev) => ({
            ...prev, [name] : value
        }));
    };
    
    const validateForm = () => {
        if (!username || !email || !password) {
            alert("All fields are required");
            return false;
        }
        return true;       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

       alert("Registration successful");
        SetFormData({
            username: "",
            email: "",
            password: "",
        });
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
              <input 
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Enter username"
               />
             <input
              type="email" 
              name="email" 
              value={email}
              placeholder="enter email"
              onChange={handleChange}
               />
               <input
                type="password" 
                name="password" 
                value={password}
                onChange={handleChange}
                placeholder="enter password"
                 />

                <button type="submit">Register</button>
          </form>
            
        </div>
    )
}