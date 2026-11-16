import { useState } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton() {
  const [liked, setLiked] = useState(false); //Create state
  const [count, setCount] = useState(0);

  const toggle = () => {
    setLiked((prev) => !prev);
    setCount((prev) => (liked ? prev - 1 : prev + 1));
  };



  

  return (
    <button
      type="button"
      className={`${styles.like} ${liked ? styles.liked : ""}`}
      onClick={toggle}
      aria-pressed={liked}
      aria-label={liked ? "Unlike this post" : "Like this post"}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 2.8 4.5 6.5 4.5c2 0 3.5 1 4.5 2.5h2c1-1.5 2.5-2.5 4.5-2.5 3.7 0 5.6 3.8 4.1 7.2C19.5 16.4 12 21 12 21z"
          fill={liked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      <span>{count}</span>
    </button>
  );
}
