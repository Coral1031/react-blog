import { Link } from "react-router";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  const { id, title, body } = post;


  
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>
        <Link to={`/posts/${id}`} className={styles.titleLink}>
          {title}
        </Link>
      </h2>
    
      <p className={styles.excerpt}>{body.substring(0, 100)}...</p>
      <div className={styles.footer}>
        <Link to={`/posts/${id}`} className={styles.readMore}>
          Read more &rarr;
        </Link>
      </div>
    </article>
  );
}
