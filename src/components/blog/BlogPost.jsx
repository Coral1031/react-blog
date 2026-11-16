import LikeButton from "./LikeButton.jsx";
import styles from "./BlogPost.module.css";

export default function BlogPost({ post, user, children }) {
  const { title, body } = post;

  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{body}</p>
      {user && (
        <>
          <p className={styles.meta}>
            <strong>Author:</strong> {user.name}
          </p>
          <p className={styles.meta}>
            <strong>Email:</strong> {user.email}
          </p>
        </>
      )}
      <LikeButton />
      {children}
    </article>
  );
}
