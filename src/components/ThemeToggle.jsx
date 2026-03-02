import { useTheme } from "./ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-pill" onClick={toggleTheme}>
      <span className={theme === "light" ? "active" : ""}>☀️</span>
      <span className={theme === "dark" ? "active" : ""}>🌙</span>
    </div>
  );
};

export default ThemeToggle;
