import { Menu, Search, Github } from "lucide-react";
import { memo } from "react";

const Header = memo(({
  searchQuery,
  onSearchChange,
  onMenuClick,
  activeCategory,
}) => {
  // Determine if current category is Properties or Components
  const isProperties = activeCategory === "tailwind-properties";
  const sectionLabel = isProperties ? "Properties" : "Components";

  // GitHub repository URL - update this with your actual repository URL
  const githubUrl = "https://github.com/afzanlearns/pixelpalette-ui.git";

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="flex items-center gap-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-[1920px] mx-auto">
        {/* Mobile menu toggle */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2.5 rounded-lg hover:bg-muted/80 active:bg-muted transition-all duration-200 hover:scale-105 hover:rotate-6 group"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
        </button>

        {/* Breadcrumb / Section Label */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <span className="text-sm font-medium text-muted-foreground">{sectionLabel}</span>
        </div>

        {/* Search bar - centered and wider */}
        <div className="flex-1 max-w-3xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="
                w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                bg-muted/50 border border-border/50
                text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-muted
                transition-all duration-200
                hover:border-border hover:bg-muted/70
              "
            />
          </div>
        </div>

        {/* GitHub link */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-150 border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 group"
            aria-label="View on GitHub"
          >
            <Github className="w-5 h-5 text-foreground transition-colors duration-150 group-hover:text-primary" />
          </a>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
