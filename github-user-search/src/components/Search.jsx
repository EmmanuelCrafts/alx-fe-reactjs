import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setuserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [minRepo, setMinRepo] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim()) {
      setError("Please enter a GitHub username");
      return;
    }

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

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-10 px-4 text-gray-200">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-12 w-full max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 mb-12">
          <h2 className="text-3xl font-bold text-center text-white">
            Search GitHub Users
          </h2>
          <p className="text-center text-gray-400 text-sm">Find developers by username, location, or repository count.</p>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-11/12 border border-gray-700 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Filter by location e.g. Nairobi"
            className="w-11/12 border border-gray-700 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />

          <input
            type="number"
            value={minRepo}
            onChange={(e) => setMinRepo(e.target.value)}
            placeholder="Min public repositories"
            className="w-11/12 border border-gray-700 bg-slate-800 text-white px-3 py-2 rounded-lg shadow-inner focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
          />

          <button
            type="submit"
            className="w-11/12 bg-blue-600 text-white py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all font-bold text-base focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
          >
            Search
          </button>
        </form>

        {loading && <p className="mt-6 text-center text-red-400 font-medium">Fetching your data...</p>}

        {error && <p className="mt-6 text-center text-red-400 font-medium">{error}</p>}

        {userData?.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 items-stretch">
              {userData.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-left shadow-lg hover:shadow-2xl  transition-all duration-300 w-full flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-24 h-24 rounded-full border-2 border-blue-500 mb-3"
                    />
                    <h3 className="font-semibold text-lg text-white mb-1">{user.login}</h3>
                    <p className="text-xs text-gray-400 mb-3">{user.location || "Location not specified"}</p>

                    <div className="text-left text-gray-300 text-xs space-y-1 px-4">
                        <p>
                            <strong>Bio:</strong> {user.bio || "No bio provided"}
                        </p>
                        <p>
                            <strong>Public Repos:</strong> {user.public_repos}
                        </p>
                    </div>
                  </div>

                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block bg-blue-600 text-white font-bold py-1.5 px-4 text-sm rounded-full hover:bg-blue-700 transition-all self-start"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full disabled:opacity-50 hover:bg-gray-600 transition-all text-sm"
              >
                Previous
              </button>
              <span className="py-2 font-semibold text-gray-300 text-sm">Page {currentPage}</span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-all text-sm"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
