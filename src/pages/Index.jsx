import { useState, useMemo, useEffect, useCallback } from "react";
import Sidebar from "@/components/gallery/Sidebar";
import Header from "@/components/gallery/Header";
import ComponentCard from "@/components/gallery/ComponentCard";
import EmptyState from "@/components/gallery/EmptyState";
import { allComponents, categories } from "@/data/components";
import { advancedComponents, advancedCategory } from "@/data/advancedComponents";
import { tailwindProperties, tailwindPropertiesCategory } from "@/data/tailwindProperties";
import { BoxIcon } from "@/components/icons/CategoryIcons";

const allCombinedComponents = [...allComponents, ...advancedComponents, ...tailwindProperties];
const allCategories = [...categories, tailwindPropertiesCategory, advancedCategory];

// Purple theme as default and only theme
const purpleColor = { name: "Purple", primary: "262 83% 68%", accent: "262 40% 25%", primaryForeground: "0 0% 100%" };

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Apply dark theme by default - optimized with requestAnimationFrame for performance
  useEffect(() => {
    // Use requestAnimationFrame to batch DOM updates and prevent lag
    const updateTheme = () => {
      const root = document.documentElement;
      
      // Batch DOM operations
      requestAnimationFrame(() => {
        // Set dark theme as default
        root.classList.remove("light", "dark");
        root.classList.add("dark");
        
        // Apply purple accent color to CSS variables
        const properties = {
          "--primary": purpleColor.primary,
          "--ring": purpleColor.primary,
          "--primary-foreground": purpleColor.primaryForeground
        };
        
        // Batch style updates
        Object.entries(properties).forEach(([key, value]) => {
          root.style.setProperty(key, value);
        });
      });
    };
    
    updateTheme();
  }, []);

  const filteredComponents = useMemo(() => {
    let components = allCombinedComponents;

    // Filter by category
    if (activeCategory !== "all") {
      components = components.filter((c) => c.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      components = components.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.usage.toLowerCase().includes(query)
      );
    }

    return components;
  }, [activeCategory, searchQuery]);
  
  // Memoize handlers to prevent unnecessary re-renders
  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);
  
  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);
  
  const handleMenuClick = useCallback(() => {
    setSidebarOpen(true);
  }, []);
  
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Memoize the active category data to prevent recalculation
  const activeCategoryData = useMemo(() => {
    return activeCategory === "all"
      ? { name: "All Components", icon: "box" }
      : allCategories.find((c) => c.id === activeCategory) || {
        name: "Components",
        icon: "box",
      };
  }, [activeCategory, allCategories]);

  // Memoize the CategoryIcon component
  const CategoryIcon = useMemo(() => {
    return activeCategoryData.icon === "box" ? BoxIcon : BoxIcon;
  }, [activeCategoryData.icon]);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar
        categories={allCategories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        isOpen={sidebarOpen}
        onClose={handleSidebarClose}
      />

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 xl:ml-72">
        <Header
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onMenuClick={handleMenuClick}
          activeCategory={activeCategory}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
          {/* Category Header */}
          <header className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <CategoryIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  {activeCategoryData.name}
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground mt-0.5 sm:mt-1">
                  {filteredComponents.length} component
                  {filteredComponents.length !== 1 ? "s" : ""} available
                </p>
              </div>
            </div>
          </header>

          {/* Components Grid */}
          {filteredComponents.length > 0 ? (
            <div className="grid gap-4 sm:gap-6 lg:gap-8">
              {filteredComponents.map((component) => (
                <ComponentCard
                  key={component.id}
                  name={component.name}
                  description={component.description}
                  code={component.code}
                  usage={component.usage}
                  preview={component.preview}
                />
              ))}
            </div>
          ) : (
            <EmptyState searchQuery={searchQuery} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
