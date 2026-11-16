import { Link } from "react-router";
import styles from "./Pages.module.css";


export default function NotFoundPage() {
  return (
    <section>
      <h2 className={styles.heading}>404 – Page Not Found</h2>
      <p className={styles.message}>The page you are looking for doesn&apos;t exist.</p>
      <Link to="/" className={styles.button}>
        Go Home
      </Link>
    </section>
  );
}
