import { useState } from "react";
const RegistrationForm = () => {
    const [FormData, SetFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        const { name, value} = e.target ;
        SetFormData((prev) => ({
            ...prev, [name] : value
        }));
    };
}