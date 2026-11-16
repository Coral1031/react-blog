import { Routes, Route } from "react-router";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import BlogPostsPage from "./pages/BlogPostsPage.jsx";
import IndividualPostPage from "./pages/IndividualPostPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import styles from "./App.module.css";



export default function App() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
