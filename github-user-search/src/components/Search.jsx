import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";
import Spinner from "./spinner";

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setuserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [minRepo, setMinRepo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await fetchUserData(username, location, minRepo, currentPage);
      setuserData(data);
    } catch (error) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  // Refetch data on page or filter changes
  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        try {
          setLoading(true);
          setError(null);
          const data = await fetchUserData(username, location, minRepo, currentPage);
          setuserData(data);
        } catch (error) {
          setError("Looks like we can't find the user");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [currentPage]);
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-700">Search GitHub Users</h2>

        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location e.g. Kenya"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={minRepo}
          onChange={(e) => setMinRepo(e.target.value)}
          placeholder="Min public repositories"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <Spinner />}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {userData?.length > 0 && (
        <>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
             {userData.map((user) => (
                 <div
                key={user.id}
                className="border border-gray-300 rounded-lg p-4 shadow hover:shadow-md transition bg-white"
                 >
               <img
                 src={user.avatar_url}
                 alt={user.login}
                 className="w-20 h-20 rounded-full mx-auto"
               />
                <h3 className="text-center font-semibold mt-2">{user.login}</h3>

                 <p className="text-sm text-gray-600 mt-1">
                    <strong>Location:</strong> {user.location || "Not available"}
                </p>

                 <p className="text-sm text-gray-600 mt-1">
                  <strong>Bio:</strong> {user.bio || "No bio provided"}
                </p>

                 <p className="text-sm text-gray-600 mt-1">
                   <strong>Public Repos:</strong> {user.public_repos}
                </p>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center text-blue-600 hover:underline mt-2"
                >
                View Profile
               </a>
                </div>
              ))}
           </div>

          {/* Pagination controls */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="py-2">Page {currentPage}</span>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchUser;
