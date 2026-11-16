import { useState } from "react";
import styles from "./ContactPage.module.css";
import pageStyles from "./Pages.module.css";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section>
      <h2 className={pageStyles.heading}>Contact</h2>
      <p className={pageStyles.lead}>
        Have a question or an idea? Send me a message.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          className={styles.field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />



        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          className={styles.field}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          className={styles.field}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          required
        />



        {submitted && (
          <p className={styles.success}>
            Thanks! This is a demo form.
            No message was sent.
          </p>
        )}

        <button type="submit" className={styles.submit}>
          Send Message
        </button>
      </form>
    </section>
  );
}