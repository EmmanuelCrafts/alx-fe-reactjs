import { useState } from "react";
const SearchUser = () => {
    const[searchInput, setSearchInput] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange =(e) =>{
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input  type="text"  value={ searchInput } onChange={handleChange} placeholder="enter GitHub username" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default SearchUser;