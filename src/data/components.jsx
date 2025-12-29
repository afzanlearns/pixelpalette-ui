import React from "react";



// Layout Components
const layoutComponents = [
  {
    id: "container",
    name: "Container",
    description: "Responsive container with max-width constraints",
    category: "layout",
    code: `<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <!-- Your content here -->
</div>`,
    usage: "Page wrappers, content sections, max-width containers",
    preview: (
      <div className="w-full bg-primary/20 border-2 border-dashed border-primary rounded-lg p-4 text-center text-sm">
        Container (max-w-7xl)
      </div>
    ),
  },
  {
    id: "grid-layout",
    name: "Grid Layout",
    description: "Responsive grid with 1/2/3 columns",
    category: "layout",
    code: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-card p-4 rounded-lg">Item 1</div>
  <div class="bg-card p-4 rounded-lg">Item 2</div>
  <div class="bg-card p-4 rounded-lg">Item 3</div>
</div>`,
    usage: "Card grids, product listings, gallery layouts",
    preview: (
      <div className="grid grid-cols-3 gap-2 w-full">
        <div className="bg-primary/20 border border-primary rounded p-3 text-center text-xs">1</div>
        <div className="bg-primary/20 border border-primary rounded p-3 text-center text-xs">2</div>
        <div className="bg-primary/20 border border-primary rounded p-3 text-center text-xs">3</div>
      </div>
    ),
  },
  {
    id: "flex-between",
    name: "Flex Space Between",
    description: "Horizontal flex with justify-between",
    category: "layout",
    code: `<div class="flex items-center justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>`,
    usage: "Headers, nav bars, card headers, list items with actions",
    preview: (
      <div className="flex items-center justify-between w-full bg-muted rounded-lg p-3">
        <span className="text-sm">Left</span>
        <span className="text-sm">Right</span>
      </div>
    ),
  },
  {
    id: "flex-center",
    name: "Flex Center",
    description: "Centered flex container for loading/empty states",
    category: "layout",
    code: `<div class="flex items-center justify-center min-h-[200px]">
  <div class="text-center">Centered content</div>
</div>`,
    usage: "Loading states, empty states, centered modals",
    preview: (
      <div className="flex items-center justify-center w-full h-20 bg-muted rounded-lg">
        <span className="text-sm text-muted-foreground">Centered</span>
      </div>
    ),
  },
];

// Typography Components
const typographyComponents = [
  {
    id: "headings",
    name: "Headings",
    description: "H1-H6 heading hierarchy with proper sizing",
    category: "typography",
    code: `<h1 class="text-4xl font-bold tracking-tight">Heading 1</h1>
<h2 class="text-3xl font-semibold">Heading 2</h2>
<h3 class="text-2xl font-semibold">Heading 3</h3>
<h4 class="text-xl font-medium">Heading 4</h4>
<h5 class="text-lg font-medium">Heading 5</h5>
<h6 class="text-base font-medium">Heading 6</h6>`,
    usage: "Page titles, section headers, content hierarchy",
    preview: (
      <div className="space-y-1 text-left w-full">
        <h1 className="text-2xl font-bold font-heading">Heading 1</h1>
        <h2 className="text-xl font-semibold font-heading">Heading 2</h2>
        <h3 className="text-lg font-semibold font-heading">Heading 3</h3>
      </div>
    ),
  },
  {
    id: "body-text",
    name: "Body Text",
    description: "Standard paragraph text with comfortable leading",
    category: "typography",
    code: `<p class="text-base leading-7 text-foreground">
  Your paragraph text goes here with comfortable line spacing
  for better readability across all devices.
</p>`,
    usage: "Article content, descriptions, explanatory text",
    preview: (
      <p className="text-base leading-7 text-foreground text-left">
        This is body text with comfortable line spacing for readability.
      </p>
    ),
  },
  {
    id: "muted-text",
    name: "Muted Text",
    description: "De-emphasized text at 60% opacity",
    category: "typography",
    code: `<p class="text-sm text-muted-foreground">
  Secondary or supporting information
</p>`,
    usage: "Captions, metadata, helper text, timestamps",
    preview: (
      <p className="text-sm text-muted-foreground">
        This is muted secondary text
      </p>
    ),
  },
  {
    id: "links",
    name: "Links",
    description: "Styled hyperlinks with accent color and underline on hover",
    category: "typography",
    code: `<a href="#" class="text-primary hover:underline transition-colors">
  Click here to learn more
</a>`,
    usage: "Navigation, inline links, CTAs, references",
    preview: (
      <a href="#" className="text-primary hover:underline transition-colors" onClick={(e) => e.preventDefault()}>
        Click here to learn more
      </a>
    ),
  },
  {
    id: "code-block",
    name: "Code Block",
    description: "Monospace code display with dark background",
    category: "typography",
    code: `<pre class="p-4 bg-surface-inset rounded-lg overflow-x-auto">
  <code class="text-sm font-mono text-code-text">
    const greeting = "Hello, World!";
  </code>
</pre>`,
    usage: "Code examples, terminal output, technical documentation",
    preview: (
      <pre className="p-3 bg-surface-inset rounded-lg overflow-x-auto w-full">
        <code className="text-sm font-mono text-code-text">
          const greeting = "Hello!";
        </code>
      </pre>
    ),
  },
];

// Button Components
const buttonComponents = [
  {
    id: "primary-button",
    name: "Primary Button",
    description: "Main CTA with primary background",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg
  hover:bg-primary/90 transition-all duration-300 ease-out">
  Get Started
</button>`,
    usage: "Primary actions, form submissions, main CTAs",
    preview: (
      <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 ease-out">
        Get Started
      </button>
    ),
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    description: "Neutral button with dark gray background",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-muted text-foreground font-medium rounded-lg
  hover:bg-muted/80 transition-all duration-300 ease-out">
  Learn More
</button>`,
    usage: "Secondary actions, cancel buttons, less important CTAs",
    preview: (
      <button className="px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-muted/80 transition-all duration-300 ease-out">
        Learn More
      </button>
    ),
  },
  {
    id: "accent-button",
    name: "Accent Button",
    description: "Highlighted button with accent color",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg
  hover:bg-accent/80 transition-all duration-300 ease-out">
  Special Offer
</button>`,
    usage: "Promotional content, highlighted features, special actions",
    preview: (
      <button className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/80 transition-all duration-300 ease-out">
        Special Offer
      </button>
    ),
  },
  {
    id: "danger-button",
    name: "Danger Button",
    description: "Destructive action button in red",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-destructive text-destructive-foreground font-medium rounded-lg
  hover:bg-destructive/90 transition-all duration-300 ease-out">
  Delete Account
</button>`,
    usage: "Delete actions, destructive operations, warnings",
    preview: (
      <button className="px-6 py-3 bg-destructive text-destructive-foreground font-medium rounded-lg hover:bg-destructive/90 transition-all duration-300 ease-out">
        Delete Account
      </button>
    ),
  },
  {
    id: "icon-button",
    name: "Icon Button",
    description: "Compact button with only an icon",
    category: "buttons",
    code: `<button class="p-3 bg-muted text-foreground rounded-lg
  hover:bg-muted/80 transition-all duration-300 ease-out">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
</button>`,
    usage: "Toolbar actions, compact interfaces, icon-only controls",
    preview: (
      <button className="p-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all duration-300 ease-out">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
        </svg>
      </button>
    ),
  },
  {
    id: "loading-button",
    name: "Loading Button",
    description: "Button with spinner and disabled state",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg
  opacity-75 cursor-not-allowed flex items-center gap-2" disabled>
  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
  </svg>
  Loading...
</button>`,
    usage: "Form submissions in progress, async operations, loading states",
    preview: (
      <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg opacity-75 cursor-not-allowed flex items-center gap-2" disabled>
        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        Loading...
      </button>
    ),
  },
  {
    id: "disabled-button",
    name: "Disabled Button",
    description: "Inactive button state",
    category: "buttons",
    code: `<button class="px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg
  opacity-50 cursor-not-allowed" disabled>
  Unavailable
</button>`,
    usage: "Disabled form buttons, unavailable features, locked content",
    preview: (
      <button className="px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg opacity-50 cursor-not-allowed" disabled>
        Unavailable
      </button>
    ),
  },
  {
    id: "button-group",
    name: "Button Group",
    description: "Connected set of buttons",
    category: "buttons",
    code: `<div class="inline-flex rounded-lg overflow-hidden border border-border">
  <button class="px-4 py-2 bg-primary text-primary-foreground font-medium
    border-r border-primary-foreground/20">Left</button>
  <button class="px-4 py-2 bg-muted text-foreground font-medium
    border-r border-border">Center</button>
  <button class="px-4 py-2 bg-muted text-foreground font-medium">Right</button>
</div>`,
    usage: "Toggle groups, segmented controls, view switchers",
    preview: (
      <div className="inline-flex rounded-lg overflow-hidden border border-border">
        <button className="px-4 py-2 bg-primary text-primary-foreground font-medium border-r border-primary-foreground/20">Left</button>
        <button className="px-4 py-2 bg-muted text-foreground font-medium border-r border-border">Center</button>
        <button className="px-4 py-2 bg-muted text-foreground font-medium">Right</button>
      </div>
    ),
  },
];

// Form Components
const formComponents = [
  {
    id: "text-input",
    name: "Text Input",
    description: "Standard input field with focus states",
    category: "forms",
    code: `<input type="text" placeholder="Enter your name"
  class="w-full px-4 py-3 bg-input border border-border rounded-lg
  text-foreground placeholder:text-muted-foreground
  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
  transition-all duration-300" />`,
    usage: "Text entry, search fields, form inputs",
    preview: (
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
      />
    ),
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "Multi-line text input with resize disabled",
    category: "forms",
    code: `<textarea placeholder="Enter your message" rows="4"
  class="w-full px-4 py-3 bg-input border border-border rounded-lg
  text-foreground placeholder:text-muted-foreground resize-none
  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
  transition-all duration-300"></textarea>`,
    usage: "Comments, descriptions, long-form text entry",
    preview: (
      <textarea
        placeholder="Enter your message"
        rows={3}
        className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
      />
    ),
  },
  {
    id: "select",
    name: "Select Dropdown",
    description: "Dropdown selection menu",
    category: "forms",
    code: `<select class="w-full px-4 py-3 bg-input border border-border rounded-lg
  text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50
  focus:border-primary transition-all duration-300">
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>`,
    usage: "Dropdown menus, option selection, filters",
    preview: (
      <select className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300">
        <option>Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    ),
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description: "Boolean selection with custom styling",
    category: "forms",
    code: `<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 rounded border-border bg-input
    text-primary focus:ring-primary focus:ring-offset-0" />
  <span class="text-foreground">Accept terms and conditions</span>
</label>`,
    usage: "Terms acceptance, multi-select options, settings toggles",
    preview: (
      <label className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="w-5 h-5 rounded border-border bg-input text-primary focus:ring-primary focus:ring-offset-0 accent-primary" defaultChecked />
        <span className="text-foreground text-sm">Accept terms</span>
      </label>
    ),
  },
  {
    id: "radio",
    name: "Radio Button",
    description: "Single selection radio group",
    category: "forms",
    code: `<div class="space-y-2">
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="radio" name="option" class="w-5 h-5 border-border bg-input
      text-primary focus:ring-primary" checked />
    <span class="text-foreground">Option A</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="radio" name="option" class="w-5 h-5 border-border bg-input
      text-primary focus:ring-primary" />
    <span class="text-foreground">Option B</span>
  </label>
</div>`,
    usage: "Single choice selection, payment methods, plan selection",
    preview: (
      <div className="space-y-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="demo-option" className="w-5 h-5 border-border bg-input text-primary focus:ring-primary accent-primary" defaultChecked />
          <span className="text-foreground text-sm">Option A</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="demo-option" className="w-5 h-5 border-border bg-input text-primary focus:ring-primary accent-primary" />
          <span className="text-foreground text-sm">Option B</span>
        </label>
      </div>
    ),
  },
  {
    id: "toggle-switch",
    name: "Toggle Switch",
    description: "Binary switch control",
    category: "forms",
    code: `<label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-11 h-6 bg-muted rounded-full peer
    peer-checked:bg-primary peer-checked:after:translate-x-full
    after:content-[''] after:absolute after:top-0.5 after:left-[2px]
    after:bg-foreground after:rounded-full after:h-5 after:w-5
    after:transition-all"></div>
  <span class="ml-3 text-foreground">Enable notifications</span>
</label>`,
    usage: "Settings toggles, feature flags, on/off states",
    preview: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-foreground after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        <span className="ml-3 text-foreground text-sm">Enable</span>
      </label>
    ),
  },
  {
    id: "input-error",
    name: "Input with Error",
    description: "Validation error state with red border",
    category: "forms",
    code: `<div class="space-y-2">
  <input type="email" placeholder="Enter email" value="invalid-email"
    class="w-full px-4 py-3 bg-input border-2 border-destructive rounded-lg
    text-foreground focus:outline-none focus:ring-2 focus:ring-destructive/50" />
  <p class="text-sm text-destructive">Please enter a valid email address</p>
</div>`,
    usage: "Form validation errors, required field warnings",
    preview: (
      <div className="space-y-2 w-full">
        <input
          type="email"
          placeholder="Enter email"
          defaultValue="invalid-email"
          className="w-full px-4 py-3 bg-input border-2 border-destructive rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-destructive/50"
        />
        <p className="text-sm text-destructive">Please enter a valid email</p>
      </div>
    ),
  },
  {
    id: "input-success",
    name: "Input with Success",
    description: "Validation success state with green border",
    category: "forms",
    code: `<div class="space-y-2">
  <input type="email" placeholder="Enter email" value="user@example.com"
    class="w-full px-4 py-3 bg-input border-2 border-success rounded-lg
    text-foreground focus:outline-none focus:ring-2 focus:ring-success/50" />
  <p class="text-sm text-success">Email is valid</p>
</div>`,
    usage: "Successful validation, confirmed inputs",
    preview: (
      <div className="space-y-2 w-full">
        <input
          type="email"
          placeholder="Enter email"
          defaultValue="user@example.com"
          className="w-full px-4 py-3 bg-input border-2 border-success rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-success/50"
        />
        <p className="text-sm text-success">Email is valid</p>
      </div>
    ),
  },
];

// Navigation Components
const navigationComponents = [
  {
    id: "navbar",
    name: "Navigation Bar",
    description: "Horizontal top nav with logo and links",
    category: "navigation",
    code: `<nav class="flex items-center justify-between px-6 py-4 bg-card border-b border-border">
  <a href="#" class="text-xl font-bold text-primary">Logo</a>
  <div class="flex items-center gap-6">
    <a href="#" class="text-foreground hover:text-primary transition-colors">Home</a>
    <a href="#" class="text-muted-foreground hover:text-primary transition-colors">About</a>
    <a href="#" class="text-muted-foreground hover:text-primary transition-colors">Contact</a>
  </div>
</nav>`,
    usage: "Main site navigation, app headers",
    preview: (
      <nav className="flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg w-full">
        <span className="text-lg font-bold text-primary">Logo</span>
        <div className="flex items-center gap-4">
          <span className="text-foreground text-sm">Home</span>
          <span className="text-muted-foreground text-sm">About</span>
        </div>
      </nav>
    ),
  },
  {
    id: "sidebar-nav",
    name: "Sidebar Navigation",
    description: "Vertical side nav with active states",
    category: "navigation",
    code: `<nav class="w-64 bg-card border-r border-border p-4 space-y-1">
  <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg
    bg-primary text-primary-foreground">
    <span>📊</span> Dashboard
  </a>
  <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-lg
    text-foreground hover:bg-muted transition-colors">
    <span>⚙️</span> Settings
  </a>
</nav>`,
    usage: "Admin panels, dashboards, app sidebars",
    preview: (
      <nav className="w-full bg-card border border-border rounded-lg p-2 space-y-1">
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm" onClick={(e) => e.preventDefault()}>
          📊 Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors text-sm" onClick={(e) => e.preventDefault()}>
          ⚙️ Settings
        </a>
      </nav>
    ),
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    description: "Path navigation with separators",
    category: "navigation",
    code: `<nav class="flex items-center gap-2 text-sm">
  <a href="#" class="text-muted-foreground hover:text-primary transition-colors">Home</a>
  <span class="text-muted-foreground">/</span>
  <a href="#" class="text-muted-foreground hover:text-primary transition-colors">Products</a>
  <span class="text-muted-foreground">/</span>
  <span class="text-foreground">Details</span>
</nav>`,
    usage: "Page location, navigation hierarchy, e-commerce paths",
    preview: (
      <nav className="flex items-center gap-2 text-sm">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>Home</a>
        <span className="text-muted-foreground">/</span>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>Products</a>
        <span className="text-muted-foreground">/</span>
        <span className="text-foreground">Details</span>
      </nav>
    ),
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "Content switching tabs with active underline",
    category: "navigation",
    code: `<div class="border-b border-border">
  <nav class="flex gap-6">
    <button class="px-1 py-4 text-primary border-b-2 border-primary font-medium">
      Overview
    </button>
    <button class="px-1 py-4 text-muted-foreground hover:text-foreground transition-colors">
      Details
    </button>
    <button class="px-1 py-4 text-muted-foreground hover:text-foreground transition-colors">
      Settings
    </button>
  </nav>
</div>`,
    usage: "Tabbed content, settings pages, multi-section views",
    preview: (
      <div className="border-b border-border w-full">
        <nav className="flex gap-4">
          <button className="px-1 py-3 text-primary border-b-2 border-primary font-medium text-sm">Overview</button>
          <button className="px-1 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm">Details</button>
          <button className="px-1 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm">Settings</button>
        </nav>
      </div>
    ),
  },
  {
    id: "pagination",
    name: "Pagination",
    description: "Page navigation with prev/next and numbers",
    category: "navigation",
    code: `<nav class="flex items-center gap-2">
  <button class="px-3 py-2 bg-muted text-foreground rounded-lg
    hover:bg-muted/80 transition-colors">← Prev</button>
  <button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg">1</button>
  <button class="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80">2</button>
  <button class="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80">3</button>
  <button class="px-3 py-2 bg-muted text-foreground rounded-lg
    hover:bg-muted/80 transition-colors">Next →</button>
</nav>`,
    usage: "Paginated lists, search results, tables",
    preview: (
      <nav className="flex items-center gap-1">
        <button className="px-2 py-1 bg-muted text-foreground rounded text-sm hover:bg-muted/80 transition-colors">←</button>
        <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">1</button>
        <button className="px-3 py-1 bg-muted text-foreground rounded text-sm hover:bg-muted/80">2</button>
        <button className="px-3 py-1 bg-muted text-foreground rounded text-sm hover:bg-muted/80">3</button>
        <button className="px-2 py-1 bg-muted text-foreground rounded text-sm hover:bg-muted/80 transition-colors">→</button>
      </nav>
    ),
  },
];

// Feedback Components
const feedbackComponents = [
  {
    id: "info-alert",
    name: "Info Alert",
    description: "Informational message with accent border",
    category: "feedback",
    code: `<div class="p-4 bg-accent/20 border-l-4 border-accent rounded-r-lg">
  <p class="font-medium text-accent-foreground">Information</p>
  <p class="text-sm text-muted-foreground mt-1">
    Here's some helpful information for you.
  </p>
</div>`,
    usage: "Tips, notes, neutral notifications",
    preview: (
      <div className="p-4 bg-accent/20 border-l-4 border-accent rounded-r-lg w-full">
        <p className="font-medium text-accent-foreground text-sm">Information</p>
        <p className="text-xs text-muted-foreground mt-1">Here's some helpful info.</p>
      </div>
    ),
  },
  {
    id: "success-alert",
    name: "Success Alert",
    description: "Success confirmation with green border",
    category: "feedback",
    code: `<div class="p-4 bg-success/20 border-l-4 border-success rounded-r-lg">
  <p class="font-medium text-success">Success!</p>
  <p class="text-sm text-muted-foreground mt-1">
    Your changes have been saved successfully.
  </p>
</div>`,
    usage: "Success messages, confirmations, completed actions",
    preview: (
      <div className="p-4 bg-success/20 border-l-4 border-success rounded-r-lg w-full">
        <p className="font-medium text-success text-sm">Success!</p>
        <p className="text-xs text-muted-foreground mt-1">Changes saved successfully.</p>
      </div>
    ),
  },
  {
    id: "danger-alert",
    name: "Danger Alert",
    description: "Error message with red border",
    category: "feedback",
    code: `<div class="p-4 bg-destructive/20 border-l-4 border-destructive rounded-r-lg">
  <p class="font-medium text-destructive">Error</p>
  <p class="text-sm text-muted-foreground mt-1">
    Something went wrong. Please try again.
  </p>
</div>`,
    usage: "Error messages, warnings, critical alerts",
    preview: (
      <div className="p-4 bg-destructive/20 border-l-4 border-destructive rounded-r-lg w-full">
        <p className="font-medium text-destructive text-sm">Error</p>
        <p className="text-xs text-muted-foreground mt-1">Something went wrong.</p>
      </div>
    ),
  },
  {
    id: "toast",
    name: "Toast Notification",
    description: "Floating notification (bottom-right positioned)",
    category: "feedback",
    code: `<div class="fixed bottom-4 right-4 p-4 bg-card border border-border rounded-lg
  shadow-elevated flex items-center gap-3 animate-slide-in">
  <span class="text-success">✓</span>
  <p class="text-foreground">File uploaded successfully</p>
  <button class="text-muted-foreground hover:text-foreground">×</button>
</div>`,
    usage: "Temporary notifications, action confirmations, updates",
    preview: (
      <div className="p-3 bg-card border border-border rounded-lg shadow-elevated flex items-center gap-3">
        <span className="text-success">✓</span>
        <p className="text-foreground text-sm">File uploaded</p>
        <button className="text-muted-foreground hover:text-foreground text-lg leading-none">×</button>
      </div>
    ),
  },
  {
    id: "modal",
    name: "Modal Dialog",
    description: "Overlay dialog with backdrop",
    category: "feedback",
    code: `<div class="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
  <div class="bg-card border border-border rounded-lg p-6 max-w-md w-full shadow-elevated">
    <h3 class="text-xl font-semibold text-foreground">Confirm Action</h3>
    <p class="text-muted-foreground mt-2">Are you sure you want to proceed?</p>
    <div class="flex justify-end gap-3 mt-6">
      <button class="px-4 py-2 bg-muted rounded-lg">Cancel</button>
      <button class="px-4 py-2 bg-primary text-primary-foreground rounded-lg">Confirm</button>
    </div>
  </div>
</div>`,
    usage: "Confirmations, forms, important messages",
    preview: (
      <div className="bg-card border border-border rounded-lg p-4 w-full shadow-elevated">
        <h3 className="text-base font-semibold text-foreground">Confirm Action</h3>
        <p className="text-muted-foreground text-sm mt-1">Are you sure?</p>
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-3 py-1.5 bg-muted rounded text-sm">Cancel</button>
          <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm">Confirm</button>
        </div>
      </div>
    ),
  },
  {
    id: "skeleton",
    name: "Skeleton Loader",
    description: "Animated loading placeholder",
    category: "feedback",
    code: `<div class="space-y-4 animate-pulse">
  <div class="h-4 bg-muted rounded w-3/4"></div>
  <div class="h-4 bg-muted rounded w-1/2"></div>
  <div class="h-4 bg-muted rounded w-5/6"></div>
</div>`,
    usage: "Loading states, content placeholders, lazy loading",
    preview: (
      <div className="space-y-3 w-full animate-pulse-soft">
        <div className="h-3 bg-muted rounded w-3/4"></div>
        <div className="h-3 bg-muted rounded w-1/2"></div>
        <div className="h-3 bg-muted rounded w-5/6"></div>
      </div>
    ),
  },
];

// Data Display Components
const dataDisplayComponents = [
  {
    id: "basic-card",
    name: "Basic Card",
    description: "Container with title, description, and action",
    category: "data-display",
    code: `<div class="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all">
  <h3 class="text-lg font-semibold text-foreground">Card Title</h3>
  <p class="text-muted-foreground mt-2">Card description goes here with supporting text.</p>
  <button class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
    Action
  </button>
</div>`,
    usage: "Content containers, feature boxes, info panels",
    preview: (
      <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-all w-full">
        <h3 className="text-base font-semibold text-foreground">Card Title</h3>
        <p className="text-muted-foreground text-sm mt-1">Description here.</p>
        <button className="mt-3 px-3 py-1.5 bg-primary text-primary-foreground rounded text-sm">Action</button>
      </div>
    ),
  },
  {
    id: "image-card",
    name: "Image Card",
    description: "Card with gradient header image",
    category: "data-display",
    code: `<div class="bg-card border border-border rounded-lg overflow-hidden">
  <div class="h-32 bg-gradient-to-br from-primary/50 to-accent/50"></div>
  <div class="p-6">
    <h3 class="text-lg font-semibold text-foreground">Featured Item</h3>
    <p class="text-muted-foreground mt-2">Description of the featured content.</p>
  </div>
</div>`,
    usage: "Blog posts, products, featured content",
    preview: (
      <div className="bg-card border border-border rounded-lg overflow-hidden w-full">
        <div className="h-16 bg-gradient-to-br from-primary/50 to-accent/50"></div>
        <div className="p-3">
          <h3 className="text-sm font-semibold text-foreground">Featured Item</h3>
          <p className="text-muted-foreground text-xs mt-1">Description here.</p>
        </div>
      </div>
    ),
  },
  {
    id: "badge",
    name: "Badge",
    description: "Small status indicators in multiple colors",
    category: "data-display",
    code: `<div class="flex gap-2 flex-wrap">
  <span class="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">Primary</span>
  <span class="px-3 py-1 text-xs font-medium bg-success/20 text-success rounded-full">Success</span>
  <span class="px-3 py-1 text-xs font-medium bg-destructive/20 text-destructive rounded-full">Error</span>
  <span class="px-3 py-1 text-xs font-medium bg-accent/30 text-accent-foreground rounded-full">Accent</span>
</div>`,
    usage: "Status labels, tags, categories, counts",
    preview: (
      <div className="flex gap-2 flex-wrap">
        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">Primary</span>
        <span className="px-2 py-0.5 text-xs font-medium bg-success/20 text-success rounded-full">Success</span>
        <span className="px-2 py-0.5 text-xs font-medium bg-destructive/20 text-destructive rounded-full">Error</span>
      </div>
    ),
  },
  {
    id: "data-table",
    name: "Data Table",
    description: "Tabular display with hover rows",
    category: "data-display",
    code: `<table class="w-full border-collapse">
  <thead>
    <tr class="border-b border-border">
      <th class="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Name</th>
      <th class="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
      <th class="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border hover:bg-muted/50 transition-colors">
      <td class="px-4 py-3 text-foreground">John Doe</td>
      <td class="px-4 py-3"><span class="text-success">Active</span></td>
      <td class="px-4 py-3 text-muted-foreground">Admin</td>
    </tr>
  </tbody>
</table>`,
    usage: "Data listings, admin panels, reports",
    preview: (
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-2 py-2 text-left text-xs font-medium text-muted-foreground">Name</th>
            <th className="px-2 py-2 text-left text-xs font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border hover:bg-muted/50 transition-colors">
            <td className="px-2 py-2 text-foreground">John</td>
            <td className="px-2 py-2"><span className="text-success">Active</span></td>
          </tr>
          <tr className="hover:bg-muted/50 transition-colors">
            <td className="px-2 py-2 text-foreground">Jane</td>
            <td className="px-2 py-2"><span className="text-muted-foreground">Pending</span></td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "list",
    name: "List",
    description: "Vertical list with avatars and metadata",
    category: "data-display",
    code: `<ul class="divide-y divide-border">
  <li class="flex items-center gap-4 py-4 hover:bg-muted/50 px-4 -mx-4 transition-colors">
    <div class="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-primary">JD</div>
    <div class="flex-1">
      <p class="font-medium text-foreground">John Doe</p>
      <p class="text-sm text-muted-foreground">john@example.com</p>
    </div>
    <span class="text-xs text-muted-foreground">2h ago</span>
  </li>
</ul>`,
    usage: "User lists, notifications, activity feeds",
    preview: (
      <ul className="divide-y divide-border w-full">
        <li className="flex items-center gap-3 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-primary text-xs">JD</div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </li>
        <li className="flex items-center gap-3 py-2">
          <div className="w-8 h-8 rounded-full bg-accent/30 flex items-center justify-center text-accent-foreground text-xs">AS</div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground text-sm truncate">Alice Smith</p>
            <p className="text-xs text-muted-foreground truncate">alice@example.com</p>
          </div>
        </li>
      </ul>
    ),
  },
  {
    id: "stats-block",
    name: "Stats Block",
    description: "Metric display cards in a grid",
    category: "data-display",
    code: `<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border border-border rounded-lg p-6">
    <p class="text-sm text-muted-foreground">Total Users</p>
    <p class="text-3xl font-bold text-foreground mt-1">12,543</p>
    <p class="text-sm text-success mt-2">↑ 12% from last month</p>
  </div>
</div>`,
    usage: "Dashboards, analytics, KPI displays",
    preview: (
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="bg-card border border-border rounded-lg p-3">
          <p className="text-xs text-muted-foreground">Users</p>
          <p className="text-xl font-bold text-foreground">12.5K</p>
          <p className="text-xs text-success">↑ 12%</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-3">
          <p className="text-xs text-muted-foreground">Revenue</p>
          <p className="text-xl font-bold text-foreground">$48K</p>
          <p className="text-xs text-success">↑ 8%</p>
        </div>
      </div>
    ),
  },
];

// Export all components and categories
export const allComponents = [
  ...layoutComponents,
  ...typographyComponents,
  ...buttonComponents,
  ...formComponents,
  ...navigationComponents,
  ...feedbackComponents,
  ...dataDisplayComponents,
];

export const categories = [
  { id: "layout", name: "Layout", icon: "layout", count: layoutComponents.length },
  { id: "typography", name: "Typography", icon: "type", count: typographyComponents.length },
  { id: "buttons", name: "Buttons", icon: "circle", count: buttonComponents.length },
  { id: "forms", name: "Forms", icon: "file-text", count: formComponents.length },
  { id: "navigation", name: "Navigation", icon: "compass", count: navigationComponents.length },
  { id: "feedback", name: "Feedback", icon: "message-square", count: feedbackComponents.length },
  { id: "data-display", name: "Data Display", icon: "bar-chart", count: dataDisplayComponents.length },
];
