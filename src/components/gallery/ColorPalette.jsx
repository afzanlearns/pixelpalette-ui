const accentColors = [
  { name: "Pink", primary: "330 81% 76%", accent: "330 40% 25%", primaryForeground: "0 0% 7%" },
  { name: "Purple", primary: "262 83% 68%", accent: "262 40% 25%", primaryForeground: "0 0% 100%" },
  { name: "Blue", primary: "217 91% 60%", accent: "217 50% 25%", primaryForeground: "0 0% 100%" },
  { name: "Green", primary: "142 76% 36%", accent: "142 50% 20%", primaryForeground: "0 0% 100%" },
  { name: "Orange", primary: "24 95% 53%", accent: "24 60% 25%", primaryForeground: "0 0% 7%" },
  { name: "Cyan", primary: "189 94% 43%", accent: "189 50% 20%", primaryForeground: "0 0% 7%" },
];

const ColorPalette = ({ activeColor, onColorChange }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-muted/50 border border-border/50">
      {accentColors.map((color) => {
        const isActive = activeColor === color.name;
        return (
          <button
            key={color.name}
            onClick={() => onColorChange(color)}
            className={`
              relative w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-300 ease-out
              hover:scale-110 active:scale-95
              ${isActive
                ? "ring-2 sm:ring-[3px] ring-offset-2 sm:ring-offset-[3px] ring-foreground/90 scale-110 shadow-lg"
                : "hover:shadow-md ring-0 ring-offset-0"
              }
            `}
            style={{
              backgroundColor: `hsl(${color.primary})`,
              ringOffsetColor: 'hsl(var(--background))'
            }}
            aria-label={`${color.name} color scheme`}
            title={color.name}
          >
            {/* Active indicator dot */}
            {isActive && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/80 animate-pulse"></span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ColorPalette;
export { accentColors };
