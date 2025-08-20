import { useState } from "react";
const RegistrationForm = () => {
    const [FormData, SetFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const[errors, setErrors] = useState({});
    
     const { username, email, password } = FormData;

    const handleChange = (e) => {
        const { name, value} = e.target ;
        SetFormData((prev) => ({
            ...prev, [name] : value
        }));
    };
    
    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";
       
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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