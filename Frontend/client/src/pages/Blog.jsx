import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7076/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h1 className="text-center mb-4">Blog Posts</h1>
        {posts.length === 0 ? (
          <p className="text-center">No posts available.</p>
        ) : (
          <ul className="list-group">
            {posts.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
