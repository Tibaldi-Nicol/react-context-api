// components/PostCard.jsx
function PostCard({ post }) {
    return (
      <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <small><strong>Category:</strong> {post.category}</small>
      </div>
    );
  }
  
  export default PostCard;
  