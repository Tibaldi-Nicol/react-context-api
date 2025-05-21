// components/PostsList.jsx
import { useContext } from "react";
import { PostsContext } from "../App"; // o da "../context/PostsContext"
import PostCard from "./PostCard";

function PostsList() {
  const posts = useContext(PostsContext);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsList;
