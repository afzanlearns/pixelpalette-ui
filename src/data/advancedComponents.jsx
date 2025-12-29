import React, { useState } from "react";

// Interactive Accordion Preview Component
const AccordionPreview = () => {
  const [openItem, setOpenItem] = useState("item-1");
  
  return (
    <div className="w-full border border-border rounded-lg divide-y divide-border">
      {["What is Tailwind?", "How to install?"].map((title, i) => {
        const id = `item-${i + 1}`;
        const isOpen = openItem === id;
        return (
          <div key={id}>
            <button
              onClick={() => setOpenItem(isOpen ? null : id)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-foreground font-medium hover:bg-muted/50 transition-smooth"
            >
              <span className="text-sm">{title}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-32" : "max-h-0"}`}>
              <div className="px-4 pb-3 text-sm text-muted-foreground">
                {i === 0 ? "A utility-first CSS framework." : "Use npm install tailwindcss."}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Interactive Tooltip Preview Component
const TooltipPreview = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
      >
        Hover me
      </button>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs rounded-md shadow-elevated border border-border whitespace-nowrap z-50">
          Tooltip content
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover" />
        </div>
      )}
    </div>
  );
};

// Animated Progress Bar Preview
const ProgressPreview = () => {
  return (
    <div className="w-full space-y-3">
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "65%" }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Progress</span>
        <span>65%</span>
      </div>
    </div>
  );
};

// Interactive Dropdown Preview
const DropdownPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-muted/80 transition-smooth"
      >
        Options
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-popover border border-border rounded-lg shadow-elevated z-50 py-1">
          {["Edit", "Duplicate", "Delete"].map((item) => (
            <button
              key={item}
              className="w-full px-4 py-2 text-sm text-left text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Stepper Progress Preview
const StepperPreview = () => {
  return (
    <div className="flex items-center w-full">
      {[1, 2, 3].map((step, i) => (
        <React.Fragment key={step}>
          <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
            i < 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}>
            {i < 1 ? "✓" : step}
          </div>
          {i < 2 && (
            <div className={`flex-1 h-1 mx-2 rounded ${i < 1 ? "bg-primary" : "bg-muted"}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// Circular Progress Preview
const CircularProgressPreview = () => {
  const percentage = 72;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-muted"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        <circle
          className="text-primary transition-all duration-500"
          strokeWidth="8"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-foreground">{percentage}%</span>
      </div>
    </div>
  );
};

// Context Menu Preview
const ContextMenuPreview = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
  
  return (
    <div 
      className="w-full h-20 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground relative border border-dashed border-border"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
        setShowMenu(true);
      }}
      onClick={() => setShowMenu(false)}
    >
      Right-click here
      {showMenu && (
        <div 
          className="absolute bg-popover border border-border rounded-lg shadow-elevated z-50 py-1 w-32"
          style={{ left: menuPos.x, top: menuPos.y }}
        >
          {["Cut", "Copy", "Paste"].map((item) => (
            <button key={item} className="w-full px-3 py-1.5 text-xs text-left text-foreground hover:bg-muted">
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Hover Card Preview
const HoverCardPreview = () => {
  const [showCard, setShowCard] = useState(false);
  
  return (
    <div className="relative inline-block">
      <span
        onMouseEnter={() => setShowCard(true)}
        onMouseLeave={() => setShowCard(false)}
        className="text-primary underline cursor-pointer text-sm"
      >
        @johndoe
      </span>
      {showCard && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elevated z-50 p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-primary text-sm">JD</div>
            <div>
              <p className="font-medium text-foreground text-sm">John Doe</p>
              <p className="text-xs text-muted-foreground">@johndoe</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const advancedComponents = [
  {
    id: "accordion",
    name: "Accordion",
    description: "Expandable content sections with smooth animations",
    category: "advanced",
    code: `<div class="w-full border border-border rounded-lg divide-y divide-border">
  <div>
    <button class="w-full flex items-center justify-between px-4 py-3 text-left 
      text-foreground font-medium hover:bg-muted/50 transition-all"
      onclick="this.parentElement.classList.toggle('open')">
      <span>What is Tailwind CSS?</span>
      <svg class="w-4 h-4 transition-transform duration-200 [.open>&]:rotate-180" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div class="overflow-hidden max-h-0 [.open>&]:max-h-32 transition-all duration-200">
      <div class="px-4 pb-3 text-sm text-muted-foreground">
        A utility-first CSS framework for rapid UI development.
      </div>
    </div>
  </div>
</div>`,
    usage: "FAQs, collapsible sections, settings panels",
    preview: <AccordionPreview />,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "Hover-triggered information popup",
    category: "advanced",
    code: `<div class="relative inline-block group">
  <button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
    Hover me
  </button>
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 
    bg-popover text-popover-foreground text-sm rounded-md shadow-lg border border-border
    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
    Helpful tooltip text
    <div class="absolute top-full left-1/2 -translate-x-1/2 border-4 
      border-transparent border-t-popover"></div>
  </div>
</div>`,
    usage: "Help text, labels, additional context on hover",
    preview: <TooltipPreview />,
  },
  {
    id: "progress-bar",
    name: "Progress Bar",
    description: "Linear progress indicator with percentage",
    category: "advanced",
    code: `<div class="w-full">
  <div class="w-full bg-muted rounded-full h-2 overflow-hidden">
    <div class="bg-primary h-full rounded-full transition-all duration-500" 
      style="width: 65%"></div>
  </div>
  <div class="flex justify-between text-xs text-muted-foreground mt-2">
    <span>Progress</span>
    <span>65%</span>
  </div>
</div>`,
    usage: "Loading states, upload progress, completion indicators",
    preview: <ProgressPreview />,
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Click-triggered options menu",
    category: "advanced",
    code: `<div class="relative inline-block">
  <button class="px-4 py-2 bg-muted text-foreground rounded-lg flex items-center gap-2"
    onclick="this.nextElementSibling.classList.toggle('hidden')">
    Options
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="hidden absolute top-full left-0 mt-1 w-40 bg-popover border border-border 
    rounded-lg shadow-lg z-50 py-1">
    <button class="w-full px-4 py-2 text-sm text-left text-foreground hover:bg-muted">Edit</button>
    <button class="w-full px-4 py-2 text-sm text-left text-foreground hover:bg-muted">Duplicate</button>
    <button class="w-full px-4 py-2 text-sm text-left text-destructive hover:bg-muted">Delete</button>
  </div>
</div>`,
    usage: "Action menus, settings, navigation dropdowns",
    preview: <DropdownPreview />,
  },
  {
    id: "circular-progress",
    name: "Circular Progress",
    description: "Circular progress indicator with percentage",
    category: "advanced",
    code: `<div class="relative w-24 h-24">
  <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
    <circle class="text-muted" stroke-width="8" stroke="currentColor" 
      fill="transparent" r="40" cx="50" cy="50"/>
    <circle class="text-primary" stroke-width="8" stroke-linecap="round" 
      stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"
      style="stroke-dasharray: 251.2; stroke-dashoffset: 70.3;"/>
  </svg>
  <div class="absolute inset-0 flex items-center justify-center">
    <span class="text-lg font-bold text-foreground">72%</span>
  </div>
</div>`,
    usage: "Dashboard metrics, loading indicators, skill ratings",
    preview: <CircularProgressPreview />,
  },
  {
    id: "stepper",
    name: "Stepper Progress",
    description: "Multi-step progress indicator",
    category: "advanced",
    code: `<div class="flex items-center w-full">
  <div class="flex items-center justify-center w-8 h-8 rounded-full 
    bg-primary text-primary-foreground text-sm font-medium">✓</div>
  <div class="flex-1 h-1 mx-2 rounded bg-primary"></div>
  <div class="flex items-center justify-center w-8 h-8 rounded-full 
    bg-primary text-primary-foreground text-sm font-medium">2</div>
  <div class="flex-1 h-1 mx-2 rounded bg-muted"></div>
  <div class="flex items-center justify-center w-8 h-8 rounded-full 
    bg-muted text-muted-foreground text-sm font-medium">3</div>
</div>`,
    usage: "Multi-step forms, checkout flows, onboarding wizards",
    preview: <StepperPreview />,
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "Right-click triggered menu",
    category: "advanced",
    code: `<div class="relative" oncontextmenu="event.preventDefault(); showContextMenu(event)">
  <div class="w-full h-24 bg-muted rounded-lg flex items-center justify-center 
    text-muted-foreground border border-dashed border-border">
    Right-click here
  </div>
  <!-- Context menu (shown via JS) -->
  <div class="hidden absolute bg-popover border border-border rounded-lg shadow-lg py-1 w-32">
    <button class="w-full px-3 py-1.5 text-sm text-left hover:bg-muted">Cut</button>
    <button class="w-full px-3 py-1.5 text-sm text-left hover:bg-muted">Copy</button>
    <button class="w-full px-3 py-1.5 text-sm text-left hover:bg-muted">Paste</button>
  </div>
</div>`,
    usage: "File managers, editors, contextual actions",
    preview: <ContextMenuPreview />,
  },
  {
    id: "hover-card",
    name: "Hover Card",
    description: "Hover-triggered preview card with rich content",
    category: "advanced",
    code: `<div class="relative inline-block group">
  <a href="#" class="text-primary underline">@johndoe</a>
  <div class="absolute top-full left-0 mt-2 w-48 bg-popover border border-border 
    rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity 
    pointer-events-none group-hover:pointer-events-auto z-50">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-primary/30 flex items-center 
        justify-center text-primary">JD</div>
      <div>
        <p class="font-medium text-foreground">John Doe</p>
        <p class="text-xs text-muted-foreground">@johndoe</p>
      </div>
    </div>
  </div>
</div>`,
    usage: "User profiles, link previews, entity details",
    preview: <HoverCardPreview />,
  },
];

export const advancedCategory = {
  id: "advanced",
  name: "Advanced",
  icon: "zap",
  count: advancedComponents.length,
};
