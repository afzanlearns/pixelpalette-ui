import { X } from "lucide-react";
import * as Icons from "../icons/CategoryIcons";
import { useEffect, memo } from "react";



// Map icon names to components
const iconMap = {
  "box": Icons.BoxIcon,
  "layout": Icons.LayoutIcon,
  "type": Icons.TypeIcon,
  "circle": Icons.CircleIcon,
  "file-text": Icons.FileTextIcon,
  "compass": Icons.CompassIcon,
  "message-square": Icons.MessageSquareIcon,
  "bar-chart": Icons.BarChartIcon,
  "zap": Icons.ZapIcon,
};

const Sidebar = memo(({
  categories,
  activeCategory,
  onCategoryChange,
  isOpen,
  onClose,
}) => {
  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId);
    onClose();
  };

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Icons.BoxIcon;
    return <IconComponent className="w-5 h-5" />;
  };

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-72 sm:w-80 bg-card/95 backdrop-blur-xl border-r border-border/50
          flex flex-col transition-transform duration-300 ease-in-out shadow-xl
          lg:z-40 lg:w-64 xl:w-72 lg:shadow-none
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-border/50 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-primary/20">
                <svg className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground leading-none transition-colors duration-200 group-hover:text-primary">
                  Pixel Palette
                </h1>
                <p className="text-xs text-muted-foreground mt-1">
                  Component Gallery
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/80 transition-all duration-200 hover:scale-105"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent overscroll-contain">
          <div className="space-y-1.5">
            {/* All Components */}
            <button
              onClick={() => handleCategoryClick("all")}
              className={`
                sidebar-item w-full flex items-center justify-between px-4 py-3.5 rounded-xl
                transition-all duration-200 text-left group
                ${activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                  : "hover:bg-muted/80 text-foreground hover:scale-[1.01] hover:shadow-sm"
                }
              `}
            >
              <span className="flex items-center gap-3">
                <span className={`transition-all duration-300 ${activeCategory === "all" ? "scale-110 rotate-12" : "group-hover:scale-110 group-hover:rotate-6"}`}>
                  {getIcon("box")}
                </span>
                <span className="font-medium text-sm sm:text-base">All Components</span>
              </span>
              <span
                className={`
                  text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200
                  ${activeCategory === "all"
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }
                `}
              >
                {categories.reduce((sum, cat) => sum + cat.count, 0)}
              </span>
            </button>

            {/* All Properties - positioned right after All Components */}
            {(() => {
              const allPropertiesCategory = categories.find(cat => cat.id === "tailwind-properties");
              if (!allPropertiesCategory) return null;
              
              return (
                <button
                  onClick={() => handleCategoryClick("tailwind-properties")}
                  className={`
                    sidebar-item w-full flex items-center justify-between px-4 py-3.5 rounded-xl
                    transition-all duration-200 text-left group
                    ${activeCategory === "tailwind-properties"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                      : "hover:bg-muted/80 text-foreground hover:scale-[1.01] hover:shadow-sm"
                    }
                  `}
                >
                  <span className="flex items-center gap-3">
                    <span className={`transition-all duration-300 ${activeCategory === "tailwind-properties" ? "scale-110 rotate-12" : "group-hover:scale-110 group-hover:rotate-6"}`}>
                      {getIcon(allPropertiesCategory.icon)}
                    </span>
                    <span className="font-medium text-sm sm:text-base">{allPropertiesCategory.name}</span>
                  </span>
                  <span
                    className={`
                      text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200
                      ${activeCategory === "tailwind-properties"
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }
                    `}
                  >
                    {allPropertiesCategory.count}
                  </span>
                </button>
              );
            })()}

            {/* Category buttons - excluding All Properties */}
            {categories.filter(category => category.id !== "tailwind-properties").map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`
                  sidebar-item w-full flex items-center justify-between px-4 py-3.5 rounded-xl
                  transition-all duration-200 text-left group
                  ${activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]"
                    : "hover:bg-muted/80 text-foreground hover:scale-[1.01] hover:shadow-sm"
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <span className={`transition-all duration-300 ${activeCategory === category.id ? "scale-110 rotate-12" : "group-hover:scale-110 group-hover:rotate-6"}`}>
                    {getIcon(category.icon)}
                  </span>
                  <span className="font-medium text-sm sm:text-base">{category.name}</span>
                </span>
                <span
                  className={`
                    text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-200
                    ${activeCategory === category.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }
                  `}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border/50 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            v1.0.0 • Built by Pixel Palette
          </p>
        </div>
      </aside>
    </>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
