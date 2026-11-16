import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import BlogPost from "../components/blog/BlogPost.jsx";
import CommentSection from "../components/comments/CommentSection.jsx";
import styles from "./Pages.module.css";

const API = "https://jsonplaceholder.typicode.com";

export default function IndividualPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsError, setCommentsError] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  

  

  useEffect(() => {
    setLoading(true);
    setError("");
    setPost(null);
    setUser(null);
  

    axios
    .get(`${API}/posts/${id}`)
    .then((response) => {
      if (!response.data.id) {
        throw new Error("Post not found");
      }
      
      setPost(response.data);
      return axios.get(`${API}/users/${response.data.userId}`);
    })
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("Error fetching post:", err);
      setError("Sorry, post can not be loaded");
    })
    .finally(() => setLoading(false));
  }, [id]);


  useEffect(() => {
    setCommentsError("");
    setComments([]);

    axios
      .get(`${API}/posts/${id}/comments`)
      .then((response) => setComments(response.data))
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setCommentsError("Sorry, comment can not be loaded");
      });
  }, [id]);



  function addComment(name, text) {
    return axios
      .post(`${API}/posts/${id}/comments`, {
        postId: Number(id),
        name: name,
        body: text,
      })
      .then((response) => {
        const newComment = { ...response.data, id: Date.now() };
        setComments((prev) => [...prev, newComment]);
      });
  }

  if (loading) {
    return <p className={styles.message}>Loading post...</p>;
  }
  if (error) {
    return (
      <section>
        <h2 className={styles.heading}>Post not found</h2>
        <p className={styles.error}>{error}</p>
        <Link to="/" className={styles.button}>
          Back to all posts
        </Link>
      </section>
    );
  }


  return (
    <section>
      <Link to="/" className={styles.back}>
        &larr; Back to all posts
      </Link>
      <BlogPost post={post} user={user}>
        {commentsError && <p className={styles.error}>{commentsError}</p>}
        <CommentSection comments={comments} onAddComment={addComment} />
      </BlogPost>
    </section>
  );
}
