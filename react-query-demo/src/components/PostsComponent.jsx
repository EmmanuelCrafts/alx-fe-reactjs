import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
};

const PostsComponents = () => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["posts"],
    queryFn:  fetchPosts,
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
    </div>
  );
}