import Navbar from "./Navbar.jsx";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Blog</h1>
      <Navbar />
    </header>
  );
}
