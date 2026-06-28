import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-border-subtle bg-bg-secondary/50 hover:bg-bg-card transition-colors z-50 overflow-hidden flex items-center justify-center w-10 h-10"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 0 : 1, 
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={20} className="text-text-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 1 : 0, 
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun size={20} className="text-text-primary" />
      </motion.div>
    </button>
  );
};
