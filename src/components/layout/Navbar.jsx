import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import styles from "./Navbar.module.css";



export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => setPosts(response.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  function handlePostChange(e) {
    const postId = e.target.value;

    if (postId !== "") {
      navigate(`/posts/${postId}`);
    }
  }


  return (
    <nav className={styles.nav} aria-label="Main">
      <Link to="/" className={styles.link}>
        Home
      </Link>

      <label className={styles.selectLabel}>
        <span className={styles.srOnly}>
          Open an individual post
        </span>

        <select
          className={styles.select}
          defaultValue=""
          onChange={handlePostChange}
        >
          <option value="">Individual Post...</option>

          {posts.map((post) => (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          ))}
        </select>
      </label>

      <Link to="/contact" className={styles.link}>
        Contact
      </Link>

      <button
        type="button"
        className={styles.toggle}
        onClick={toggleTheme}
        aria-label="Toggle dark and light mode"
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}