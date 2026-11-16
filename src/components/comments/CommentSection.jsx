import CommentForm from "./CommentForm.jsx";
import CommentList from "./CommentList.jsx";
import styles from "./CommentSection.module.css";


export default function CommentSection({ comments, onAddComment }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Comments</h3>
      <CommentForm onSubmit={onAddComment} />
      <CommentList comments={comments} />
    </section>
  );
}
