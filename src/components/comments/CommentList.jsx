import styles from "./CommentList.module.css";


export default function CommentList({ comments }) {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.heading}>Existing Comments:</h4>


      {comments.length === 0 ? (
        <p className={styles.empty}>Be first to commrnt!</p>
      ) : (
        <ul className={styles.list}>
          {comments.map((comment) => (
            <li key={comment.id} className={styles.item}>
              <strong className={styles.name}>{comment.name}:</strong>{" "}
              {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
