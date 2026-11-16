import { useState } from "react";
import styles from "./CommentForm.module.css";

export default function CommentForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedText = text.trim();
    if (!trimmedName || !trimmedText) {
      setError("Please enter your name and comment.");
      return;
    }


    onSubmit(trimmedName, trimmedText)
      .then(() => {
        setName("");
        setText("");
        setError("");
      })
      .catch((err) => {
        console.error("Error posting comment:", err);
        setError("Your comment can not be posted. Please try again.");
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <input
        className={styles.input}
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Your name"
      />
      <textarea
        className={styles.textarea}
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        aria-label="Add a comment"
      />
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <button type="submit" className={styles.submit}>
        Submit
      </button>
    </form>
  );
}
