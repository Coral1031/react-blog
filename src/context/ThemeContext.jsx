import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("blog-theme") || "light"
  );

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("blog-theme", theme);
  }, [theme]);



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
