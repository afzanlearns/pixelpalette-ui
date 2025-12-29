import { Moon, Sun } from "lucide-react";
import { memo, useCallback } from "react";

const ThemeToggle = memo(({ theme, onThemeChange }) => {
  const handleToggle = useCallback((e) => {
    e.preventDefault();
    // Use requestAnimationFrame to ensure smooth transition
    requestAnimationFrame(() => {
      onThemeChange(theme === "dark" ? "light" : "dark");
    });
  }, [theme, onThemeChange]);

  const isDark = theme === "dark";
  
  return (
    <button
      onClick={handleToggle}
      className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-150 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground transition-transform duration-150 group-hover:text-primary group-hover:rotate-180 group-hover:scale-110" />
      ) : (
        <Moon className="w-5 h-5 text-foreground transition-transform duration-150 group-hover:text-primary group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
