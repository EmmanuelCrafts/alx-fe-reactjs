import axios from "axios"
const GITHUB_TOKEN =import.meta.env.VITE_GITHUB_TOKEN;

export const fetchUserData = async (username,location, minRepos ,currentPage) => {
   let query = '';
   if(username) query += `${username}`
   if(location) query += `+location:${location}`
   if(minRepos) query += `+repos:>${minRepos}`

   const headers = {
    Authorization: `token ${GITHUB_TOKEN}`,
   }
   const perPage = 10;
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=${perPage}&page=${currentPage}`,
            {headers}
        );
        const responseData = response.data.items;

        const detailedUsers = await Promise.all(
             responseData.map(
                async(user) => {
                    const userData = await axios.get(`https://api.github.com/users/${user.login}`,
                        {headers}
                    );
                    return userData.data;
                }
             )
        );
        return detailedUsers;
    } catch (error) {
        throw new Error(
            error.response?.data?.message ||
            "user not found or error occured");
    }
};
