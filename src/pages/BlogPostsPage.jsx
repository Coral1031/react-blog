import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/blog/PostCard.jsx";
import styles from "./Pages.module.css";

export default function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Sorry, the blog posts could not be loaded. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  
  return (
    <section>
      <h2 className={styles.heading}>Blog Posts</h2>
      <p className={styles.lead}>Pick a post to read it and join the discussion.</p>


      {loading ? (
        <p className={styles.message}>Loading posts...</p>
      ) : error ? (
      <p className={styles.error}>{error}</p>
    ) : (
       <div className={styles.list}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
          ))}
          </div>
        )}
    </section>
  );
}
