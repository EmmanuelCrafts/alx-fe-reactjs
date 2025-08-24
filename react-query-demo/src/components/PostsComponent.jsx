import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
};

const PostsComponents = () => {
  const { isLoading, error, isError, data,  refetch} = useQuery({
    queryKey: ["posts"],
    queryFn:  fetchPosts,
    staleTime: 5000, // Data is considered fresh for 5 seconds
    cacheTime: 10000, // Unused data is cached for 10 seconds
    refetchOnWindowFocus: true, // Refetch data when window is focused
    keepPreviousData: true, // Keep previous data while fetching new data
    });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
        <button onClick={() => refetch()}>Refetch Posts</button>
    </div>
  );
}
export default PostsComponents;