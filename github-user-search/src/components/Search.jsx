import {  useState } from "react";
import { fetchUserData } from "../services/githubService";
const SearchUser = () => {
    const[searchInput, setSearchInput] = useState('');
    const[userData,setuserData ] = useState(null);
    const[error, setError] = useState("");
    const[loading, setLoading] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setuserData(null);
        setLoading(true);

        try {
            const data = await fetchUserData(searchInput);
            setuserData(data);
        } catch (error) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    const handleChange =(e) =>{
        setSearchInput(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="bg-white shadow-md rounded p-6 w-full max-w-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                placeholder="Enter GitHub username"
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
    
            {/* Loading  ..style chatgpt  focus on styles later*/}
         {loading && (
            <div className="mt-4 flex items-center justify-center gap-2 text-blue-600">
             <svg
                className="animate-spin h-5 w-5 text-blue-600"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                >
                 <circle
                   className="opacity-25"
                   cx="12"
                   cy="12"
                   r="10"
                   stroke="currentColor"
                   strokeWidth="4"
                />
                <path
                 className="opacity-75"
                 fill="currentColor"
                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
               />
            </svg>
           <p>Loading...</p>
         </div>
        )}

            {/* Error */}
            {error && <p className="mt-4 text-red-500">{error}</p>}
    
            {/* User Data */}
            {userData && (
              <div className="mt-6 text-center">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{userData.name || userData.login}</h2>
                <p className="text-gray-700">{userData.bio}</p>
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default SearchUser;
    