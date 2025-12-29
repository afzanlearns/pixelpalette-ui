// Tailwind CSS Properties - Comprehensive List with Visual Examples

export const tailwindProperties = [
  // LAYOUT PROPERTIES
  {
    id: "aspect-ratio",
    name: "Aspect Ratio",
    category: "tailwind-properties",
    description: "Utilities for controlling the aspect ratio of an element.",
    code: `aspect-auto
aspect-square
aspect-video`,
    usage: "Use aspect-{ratio} to set the aspect ratio",
    preview: (
      <div className="space-y-4">
        <div className="aspect-video bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">
          aspect-video (16/9)
        </div>
        <div className="aspect-square w-48 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
          aspect-square (1/1)
        </div>
      </div>
    ),
  },
  {
    id: "tailwind-container",
    name: "Container",
    category: "tailwind-properties",
    description: "A component for fixing an element's width to the current breakpoint.",
    code: `container
container mx-auto
container px-4`,
    usage: "Use container to create a responsive fixed-width container",
    preview: (
      <div className="container mx-auto bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg">
        <p className="text-sm font-medium">This is a container that responds to breakpoints</p>
      </div>
    ),
  },
  {
    id: "columns",
    name: "Columns",
    category: "tailwind-properties",
    description: "Utilities for controlling the number of columns within an element.",
    code: `columns-1
columns-2
columns-3
columns-auto`,
    usage: "Use columns-{number} for multi-column layouts",
    preview: (
      <div className="columns-2 gap-4 space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-sm">Column 1 content flows naturally into the next column when it fills up.</p>
        <p className="text-sm">Column 2 continues the text from column 1 seamlessly.</p>
        <p className="text-sm">Additional content keeps flowing.</p>
      </div>
    ),
  },
  {
    id: "break-inside",
    name: "Break Inside",
    category: "tailwind-properties",
    description: "Utilities for controlling how a column or page should break within an element.",
    code: `break-inside-auto
break-inside-avoid
break-inside-avoid-page
break-inside-avoid-column`,
    usage: "Use break-inside-{value} to control page/column breaks",
    preview: (
      <div className="columns-2 gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="break-inside-avoid bg-white dark:bg-gray-800 p-3 rounded mb-2">
          <p className="text-sm font-semibold">Kept Together</p>
          <p className="text-xs">This won't break across columns</p>
        </div>
      </div>
    ),
  },
  {
    id: "box-decoration",
    name: "Box Decoration Break",
    category: "tailwind-properties",
    description: "Utilities for controlling how element fragments should be rendered across multiple lines.",
    code: `box-decoration-clone
box-decoration-slice`,
    usage: "Use box-decoration-{value} to control fragmentation",
    preview: (
      <span className="box-decoration-clone bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 rounded text-sm">
        This text with background breaks across lines
      </span>
    ),
  },
  {
    id: "box-sizing",
    name: "Box Sizing",
    category: "tailwind-properties",
    description: "Utilities for controlling how the browser should calculate an element's total size.",
    code: `box-border
box-content`,
    usage: "Use box-border or box-content to control sizing",
    preview: (
      <div className="space-y-2">
        <div className="box-border w-32 h-16 p-4 border-4 border-purple-500 bg-purple-100 dark:bg-purple-900/30 rounded">
          <p className="text-xs">box-border</p>
        </div>
        <div className="box-content w-32 h-16 p-4 border-4 border-pink-500 bg-pink-100 dark:bg-pink-900/30 rounded">
          <p className="text-xs">box-content</p>
        </div>
      </div>
    ),
  },
  {
    id: "display",
    name: "Display",
    category: "tailwind-properties",
    description: "Utilities for controlling the display box type of an element.",
    code: `block
inline-block
inline
flex
inline-flex
grid
inline-grid
hidden`,
    usage: "Use display utilities to control element type",
    preview: (
      <div className="space-y-2">
        <div className="block bg-purple-200 dark:bg-purple-800 p-2 rounded text-xs">block</div>
        <span className="inline-block bg-blue-200 dark:bg-blue-800 p-2 rounded text-xs mr-2">inline-block</span>
        <span className="inline-block bg-blue-200 dark:bg-blue-800 p-2 rounded text-xs">inline-block</span>
      </div>
    ),
  },
  {
    id: "float",
    name: "Float",
    category: "tailwind-properties",
    description: "Utilities for controlling the wrapping of content around an element.",
    code: `float-left
float-right
float-none`,
    usage: "Use float-{direction} for text wrapping",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <img src="data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%239333ea' width='80' height='80'/%3E%3C/svg%3E" className="float-left mr-4 rounded" alt="placeholder" />
        <p className="text-xs">This text wraps around the floated image. Float utilities are useful for magazine-style layouts.</p>
      </div>
    ),
  },
  {
    id: "clear",
    name: "Clear",
    category: "tailwind-properties",
    description: "Utilities for controlling the wrapping of content around an element.",
    code: `clear-left
clear-right
clear-both
clear-none`,
    usage: "Use clear-{side} to clear floats",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg space-y-2">
        <div className="float-left w-16 h-16 bg-purple-500 rounded mr-2"></div>
        <p className="text-xs">Floated element</p>
        <div className="clear-left bg-blue-200 dark:bg-blue-800 p-2 rounded text-xs">
          clear-left - starts below floats
        </div>
      </div>
    ),
  },
  {
    id: "isolation",
    name: "Isolation",
    category: "tailwind-properties",
    description: "Utilities for controlling whether an element should explicitly create a new stacking context.",
    code: `isolate
isolation-auto`,
    usage: "Use isolate to create new stacking context",
    preview: (
      <div className="isolate bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-xs">This creates an isolated stacking context</p>
      </div>
    ),
  },
  {
    id: "object-fit",
    name: "Object Fit",
    category: "tailwind-properties",
    description: "Utilities for controlling how a replaced element's content should be resized.",
    code: `object-contain
object-cover
object-fill
object-none
object-scale-down`,
    usage: "Use object-{fit} for image/video sizing",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <img src="data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%239333ea' width='200' height='100'/%3E%3C/svg%3E" className="object-cover w-full h-24 rounded" alt="cover" />
          <p className="text-xs text-center">object-cover</p>
        </div>
        <div className="space-y-2">
          <img src="data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%239333ea' width='200' height='100'/%3E%3C/svg%3E" className="object-contain w-full h-24 rounded bg-gray-100 dark:bg-gray-800" alt="contain" />
          <p className="text-xs text-center">object-contain</p>
        </div>
      </div>
    ),
  },
  {
    id: "object-position",
    name: "Object Position",
    category: "tailwind-properties",
    description: "Utilities for controlling how a replaced element's content should be positioned within its container.",
    code: `object-bottom
object-center
object-left
object-right
object-top`,
    usage: "Use object-{position} to position content",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {["top", "center", "bottom"].map((pos) => (
          <div key={pos} className="space-y-1">
            <div className={`object-${pos} w-full h-20 bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-${pos === "top" ? "start" : pos === "bottom" ? "end" : "center"} justify-center`}>
              <span className="text-white text-xs font-semibold px-2 py-1 bg-black/30 rounded">{pos}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "overflow",
    name: "Overflow",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element handles content that is too large for the container.",
    code: `overflow-auto
overflow-hidden
overflow-clip
overflow-visible
overflow-scroll
overflow-x-auto
overflow-y-auto`,
    usage: "Use overflow-{value} to control scrolling",
    preview: (
      <div className="space-y-4">
        <div className="overflow-hidden h-20 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
          <p className="text-xs">overflow-hidden: This content is clipped and cannot be scrolled. Additional text that goes beyond the container is hidden.</p>
        </div>
        <div className="overflow-auto h-20 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
          <p className="text-xs">overflow-auto: This content can be scrolled if needed. Try scrolling this box to see more content that extends beyond the visible area.</p>
        </div>
      </div>
    ),
  },
  {
    id: "overscroll",
    name: "Overscroll Behavior",
    category: "tailwind-properties",
    description: "Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.",
    code: `overscroll-auto
overscroll-contain
overscroll-none`,
    usage: "Use overscroll-{behavior} to control scroll chaining",
    preview: (
      <div className="overscroll-contain h-32 overflow-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-xs mb-2">overscroll-contain prevents scroll chaining</p>
        <div className="h-64 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>
      </div>
    ),
  },
  {
    id: "position",
    name: "Position",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element is positioned in the DOM.",
    code: `static
fixed
absolute
relative
sticky`,
    usage: "Use position utilities to control positioning",
    preview: (
      <div className="relative h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
        <div className="absolute top-2 left-2 bg-purple-500 text-white px-3 py-1 rounded text-xs">
          absolute
        </div>
        <div className="absolute bottom-2 right-2 bg-pink-500 text-white px-3 py-1 rounded text-xs">
          absolute
        </div>
        <div className="relative inline-block bg-blue-500 text-white px-3 py-1 rounded text-xs mt-8">
          relative
        </div>
      </div>
    ),
  },
  {
    id: "inset",
    name: "Top / Right / Bottom / Left",
    category: "tailwind-properties",
    description: "Utilities for controlling the placement of positioned elements.",
    code: `top-0 right-0 bottom-0 left-0
inset-0
inset-x-0
inset-y-0
top-1/2 left-1/2`,
    usage: "Use inset/top/right/bottom/left for positioning",
    preview: (
      <div className="relative h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-300">
          inset-0 (all sides)
        </div>
        <div className="absolute top-2 left-2 w-4 h-4 bg-purple-500 rounded-full"></div>
        <div className="absolute top-2 right-2 w-4 h-4 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full"></div>
      </div>
    ),
  },
  {
    id: "visibility",
    name: "Visibility",
    category: "tailwind-properties",
    description: "Utilities for controlling the visibility of an element.",
    code: `visible
invisible
collapse`,
    usage: "Use visible/invisible to control visibility",
    preview: (
      <div className="space-y-2">
        <div className="visible bg-purple-200 dark:bg-purple-800 p-2 rounded text-xs">visible</div>
        <div className="invisible bg-purple-200 dark:bg-purple-800 p-2 rounded text-xs">invisible (takes up space)</div>
        <div className="visible bg-purple-200 dark:bg-purple-800 p-2 rounded text-xs">visible again</div>
      </div>
    ),
  },
  {
    id: "z-index",
    name: "Z-Index",
    category: "tailwind-properties",
    description: "Utilities for controlling the stack order of an element.",
    code: `z-0 z-10 z-20 z-30 z-40 z-50
z-auto`,
    usage: "Use z-{index} to control stacking",
    preview: (
      <div className="relative h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="absolute z-10 top-8 left-8 w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xs">
          z-10
        </div>
        <div className="absolute z-20 top-12 left-12 w-20 h-20 bg-pink-500 rounded-lg flex items-center justify-center text-white text-xs">
          z-20
        </div>
        <div className="absolute z-30 top-16 left-16 w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs">
          z-30
        </div>
      </div>
    ),
  },

  // FLEXBOX PROPERTIES
  {
    id: "flex-basis",
    name: "Flex Basis",
    category: "tailwind-properties",
    description: "Utilities for controlling the initial size of flex items.",
    code: `basis-0
basis-1
basis-auto
basis-full
basis-1/2`,
    usage: "Use basis-{size} to set initial flex size",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="basis-1/4 bg-purple-500 text-white p-2 rounded text-xs text-center">basis-1/4</div>
        <div className="basis-1/2 bg-pink-500 text-white p-2 rounded text-xs text-center">basis-1/2</div>
        <div className="basis-1/4 bg-blue-500 text-white p-2 rounded text-xs text-center">basis-1/4</div>
      </div>
    ),
  },
  {
    id: "flex-direction",
    name: "Flex Direction",
    category: "tailwind-properties",
    description: "Utilities for controlling the direction of flex items.",
    code: `flex-row
flex-row-reverse
flex-col
flex-col-reverse`,
    usage: "Use flex-{direction} to set flex direction",
    preview: (
      <div className="space-y-4">
        <div className="flex flex-row gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="bg-purple-500 text-white p-2 rounded text-xs">1</div>
          <div className="bg-pink-500 text-white p-2 rounded text-xs">2</div>
          <div className="bg-blue-500 text-white p-2 rounded text-xs">3</div>
          <p className="text-xs self-center ml-auto">flex-row</p>
        </div>
        <div className="flex flex-col gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <p className="text-xs">flex-col</p>
          <div className="bg-purple-500 text-white p-2 rounded text-xs">1</div>
          <div className="bg-pink-500 text-white p-2 rounded text-xs">2</div>
          <div className="bg-blue-500 text-white p-2 rounded text-xs">3</div>
        </div>
      </div>
    ),
  },
  {
    id: "flex-wrap",
    name: "Flex Wrap",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex items wrap.",
    code: `flex-wrap
flex-wrap-reverse
flex-nowrap`,
    usage: "Use flex-{wrap} to control wrapping",
    preview: (
      <div className="flex flex-wrap gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-purple-500 text-white px-4 py-2 rounded text-xs">
            Item {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "flex",
    name: "Flex",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex items grow and shrink.",
    code: `flex-1
flex-auto
flex-initial
flex-none`,
    usage: "Use flex-{value} to control flexibility",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="flex-none bg-purple-500 text-white p-2 rounded text-xs">flex-none</div>
        <div className="flex-1 bg-pink-500 text-white p-2 rounded text-xs text-center">flex-1 (grows)</div>
        <div className="flex-none bg-blue-500 text-white p-2 rounded text-xs">flex-none</div>
      </div>
    ),
  },
  {
    id: "flex-grow",
    name: "Flex Grow",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex items grow.",
    code: `grow
grow-0`,
    usage: "Use grow to allow flex item to grow",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="grow-0 bg-purple-500 text-white p-2 rounded text-xs">grow-0</div>
        <div className="grow bg-pink-500 text-white p-2 rounded text-xs text-center">grow (fills space)</div>
        <div className="grow-0 bg-blue-500 text-white p-2 rounded text-xs">grow-0</div>
      </div>
    ),
  },
  {
    id: "flex-shrink",
    name: "Flex Shrink",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex items shrink.",
    code: `shrink
shrink-0`,
    usage: "Use shrink to allow flex item to shrink",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="shrink-0 bg-purple-500 text-white p-2 rounded text-xs whitespace-nowrap">No Shrink</div>
        <div className="shrink bg-pink-500 text-white p-2 rounded text-xs">Can shrink if needed based on available space</div>
      </div>
    ),
  },
  {
    id: "order",
    name: "Order",
    category: "tailwind-properties",
    description: "Utilities for controlling the order of flex and grid items.",
    code: `order-1
order-2
order-first
order-last
order-none`,
    usage: "Use order-{number} to reorder items",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="order-3 bg-purple-500 text-white p-2 rounded text-xs">order-3 (1st in DOM)</div>
        <div className="order-1 bg-pink-500 text-white p-2 rounded text-xs">order-1 (2nd in DOM)</div>
        <div className="order-2 bg-blue-500 text-white p-2 rounded text-xs">order-2 (3rd in DOM)</div>
      </div>
    ),
  },
  {
    id: "grid-template-columns",
    name: "Grid Template Columns",
    category: "tailwind-properties",
    description: "Utilities for specifying the columns in a grid layout.",
    code: `grid-cols-1
grid-cols-2
grid-cols-3
grid-cols-12`,
    usage: "Use grid-cols-{n} to create grid columns",
    preview: (
      <div className="grid grid-cols-3 gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-purple-500 text-white p-4 rounded text-xs text-center">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "grid-column",
    name: "Grid Column Start / End",
    category: "tailwind-properties",
    description: "Utilities for controlling how elements are sized and placed across grid columns.",
    code: `col-span-2
col-span-3
col-start-2
col-end-3`,
    usage: "Use col-span-{n} to span columns",
    preview: (
      <div className="grid grid-cols-3 gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="col-span-2 bg-purple-500 text-white p-4 rounded text-xs text-center">
          col-span-2
        </div>
        <div className="bg-pink-500 text-white p-4 rounded text-xs text-center">1</div>
        <div className="bg-blue-500 text-white p-4 rounded text-xs text-center">1</div>
        <div className="col-span-2 bg-green-500 text-white p-4 rounded text-xs text-center">
          col-span-2
        </div>
      </div>
    ),
  },
  {
    id: "grid-template-rows",
    name: "Grid Template Rows",
    category: "tailwind-properties",
    description: "Utilities for specifying the rows in a grid layout.",
    code: `grid-rows-1
grid-rows-2
grid-rows-3`,
    usage: "Use grid-rows-{n} to create grid rows",
    preview: (
      <div className="grid grid-rows-3 grid-flow-col gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-48">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-purple-500 text-white p-2 rounded text-xs flex items-center justify-center">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "grid-row",
    name: "Grid Row Start / End",
    category: "tailwind-properties",
    description: "Utilities for controlling how elements are sized and placed across grid rows.",
    code: `row-span-2
row-span-3
row-start-2
row-end-3`,
    usage: "Use row-span-{n} to span rows",
    preview: (
      <div className="grid grid-rows-3 grid-cols-2 gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-48">
        <div className="row-span-2 bg-purple-500 text-white p-2 rounded text-xs flex items-center justify-center">
          row-span-2
        </div>
        <div className="bg-pink-500 text-white p-2 rounded text-xs flex items-center justify-center">1</div>
        <div className="bg-blue-500 text-white p-2 rounded text-xs flex items-center justify-center">2</div>
        <div className="bg-green-500 text-white p-2 rounded text-xs flex items-center justify-center">3</div>
      </div>
    ),
  },
  {
    id: "gap",
    name: "Gap",
    category: "tailwind-properties",
    description: "Utilities for controlling gutters between grid and flexbox items.",
    code: `gap-0
gap-1
gap-2
gap-4
gap-x-4
gap-y-2`,
    usage: "Use gap-{size} to add spacing",
    preview: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-purple-500 text-white p-2 rounded text-xs text-center">
              gap-4
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "justify-content",
    name: "Justify Content",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex and grid items are positioned along the main axis.",
    code: `justify-start
justify-end
justify-center
justify-between
justify-around
justify-evenly`,
    usage: "Use justify-{alignment} for main axis",
    preview: (
      <div className="space-y-2">
        {["start", "center", "end", "between"].map((alignment) => (
          <div key={alignment} className={`flex justify-${alignment} gap-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg`}>
            <div className="bg-purple-500 text-white px-3 py-1 rounded text-xs">1</div>
            <div className="bg-pink-500 text-white px-3 py-1 rounded text-xs">2</div>
            <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs">3</div>
            <span className="text-xs self-center ml-2">justify-{alignment}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "justify-items",
    name: "Justify Items",
    category: "tailwind-properties",
    description: "Utilities for controlling how grid items are aligned along their inline axis.",
    code: `justify-items-start
justify-items-end
justify-items-center
justify-items-stretch`,
    usage: "Use justify-items-{alignment} for grid items",
    preview: (
      <div className="grid grid-cols-3 justify-items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-purple-500 text-white px-4 py-2 rounded text-xs">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "justify-self",
    name: "Justify Self",
    category: "tailwind-properties",
    description: "Utilities for controlling how an individual grid item is aligned along its inline axis.",
    code: `justify-self-auto
justify-self-start
justify-self-end
justify-self-center
justify-self-stretch`,
    usage: "Use justify-self-{alignment} for individual items",
    preview: (
      <div className="grid grid-cols-3 gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="justify-self-start bg-purple-500 text-white px-2 py-1 rounded text-xs">start</div>
        <div className="justify-self-center bg-pink-500 text-white px-2 py-1 rounded text-xs">center</div>
        <div className="justify-self-end bg-blue-500 text-white px-2 py-1 rounded text-xs">end</div>
      </div>
    ),
  },
  {
    id: "align-content",
    name: "Align Content",
    category: "tailwind-properties",
    description: "Utilities for controlling how rows are positioned in multi-row flex and grid containers.",
    code: `content-center
content-start
content-end
content-between
content-around
content-evenly`,
    usage: "Use content-{alignment} for multi-row alignment",
    preview: (
      <div className="flex flex-wrap content-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-48">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-purple-500 text-white px-4 py-2 rounded text-xs">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "align-items",
    name: "Align Items",
    category: "tailwind-properties",
    description: "Utilities for controlling how flex and grid items are positioned along the cross axis.",
    code: `items-start
items-end
items-center
items-baseline
items-stretch`,
    usage: "Use items-{alignment} for cross axis",
    preview: (
      <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-32">
        <div className="bg-purple-500 text-white p-2 rounded text-xs h-12">items</div>
        <div className="bg-pink-500 text-white p-2 rounded text-xs h-16">center</div>
        <div className="bg-blue-500 text-white p-2 rounded text-xs h-8">aligned</div>
      </div>
    ),
  },
  {
    id: "align-self",
    name: "Align Self",
    category: "tailwind-properties",
    description: "Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.",
    code: `self-auto
self-start
self-end
self-center
self-stretch`,
    usage: "Use self-{alignment} for individual alignment",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-32">
        <div className="self-start bg-purple-500 text-white p-2 rounded text-xs">self-start</div>
        <div className="self-center bg-pink-500 text-white p-2 rounded text-xs">self-center</div>
        <div className="self-end bg-blue-500 text-white p-2 rounded text-xs">self-end</div>
      </div>
    ),
  },
  {
    id: "place-content",
    name: "Place Content",
    category: "tailwind-properties",
    description: "Utilities for controlling how content is justified and aligned at the same time.",
    code: `place-content-center
place-content-start
place-content-end
place-content-between
place-content-around
place-content-evenly
place-content-stretch`,
    usage: "Use place-content-{alignment} for both axes",
    preview: (
      <div className="grid grid-cols-3 place-content-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-48">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-purple-500 text-white p-2 rounded text-xs text-center">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "place-items",
    name: "Place Items",
    category: "tailwind-properties",
    description: "Utilities for controlling how items are justified and aligned at the same time.",
    code: `place-items-start
place-items-end
place-items-center
place-items-stretch`,
    usage: "Use place-items-{alignment} for both axes",
    preview: (
      <div className="grid grid-cols-3 place-items-center gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-purple-500 text-white p-2 rounded text-xs">
            {i}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "place-self",
    name: "Place Self",
    category: "tailwind-properties",
    description: "Utilities for controlling how an individual item is justified and aligned at the same time.",
    code: `place-self-auto
place-self-start
place-self-end
place-self-center
place-self-stretch`,
    usage: "Use place-self-{alignment} for individual items",
    preview: (
      <div className="grid grid-cols-3 gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg h-32">
        <div className="place-self-start bg-purple-500 text-white p-2 rounded text-xs">start</div>
        <div className="place-self-center bg-pink-500 text-white p-2 rounded text-xs">center</div>
        <div className="place-self-end bg-blue-500 text-white p-2 rounded text-xs">end</div>
      </div>
    ),
  },

  // SPACING PROPERTIES
  {
    id: "padding",
    name: "Padding",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's padding.",
    code: `p-0 p-1 p-2 p-4 p-8
px-4 py-2
pt-4 pr-2 pb-4 pl-2`,
    usage: "Use p-{size} for padding",
    preview: (
      <div className="space-y-2">
        <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">
          <div className="bg-white dark:bg-gray-700 p-2 text-xs">p-4 padding</div>
        </div>
        <div className="bg-purple-200 dark:bg-purple-800 p-8 rounded">
          <div className="bg-white dark:bg-gray-700 p-2 text-xs">p-8 padding</div>
        </div>
      </div>
    ),
  },
  {
    id: "margin",
    name: "Margin",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's margin.",
    code: `m-0 m-1 m-2 m-4 m-8
mx-4 my-2
mt-4 mr-2 mb-4 ml-2
-m-4 (negative margin)`,
    usage: "Use m-{size} for margin",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="bg-purple-500 text-white p-2 rounded text-xs text-center m-4">m-4</div>
        <div className="bg-pink-500 text-white p-2 rounded text-xs text-center mx-8">mx-8</div>
        <div className="bg-blue-500 text-white p-2 rounded text-xs text-center my-4">my-4</div>
      </div>
    ),
  },
  {
    id: "space-between",
    name: "Space Between",
    category: "tailwind-properties",
    description: "Utilities for controlling the space between child elements.",
    code: `space-x-0 space-x-2 space-x-4
space-y-0 space-y-2 space-y-4`,
    usage: "Use space-{axis}-{size} for spacing",
    preview: (
      <div className="space-y-4">
        <div className="flex space-x-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="bg-purple-500 text-white p-2 rounded text-xs">1</div>
          <div className="bg-pink-500 text-white p-2 rounded text-xs">2</div>
          <div className="bg-blue-500 text-white p-2 rounded text-xs">3</div>
          <p className="text-xs self-center ml-auto">space-x-4</p>
        </div>
        <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <p className="text-xs">space-y-2</p>
          <div className="bg-purple-500 text-white p-2 rounded text-xs">1</div>
          <div className="bg-pink-500 text-white p-2 rounded text-xs">2</div>
          <div className="bg-blue-500 text-white p-2 rounded text-xs">3</div>
        </div>
      </div>
    ),
  },

  // SIZING PROPERTIES
  {
    id: "width",
    name: "Width",
    category: "tailwind-properties",
    description: "Utilities for setting the width of an element.",
    code: `w-0 w-1 w-2 w-4 w-8
w-1/2 w-1/3 w-full
w-screen w-auto`,
    usage: "Use w-{size} to set width",
    preview: (
      <div className="space-y-2">
        <div className="w-1/2 bg-purple-500 text-white p-2 rounded text-xs text-center">w-1/2</div>
        <div className="w-full bg-pink-500 text-white p-2 rounded text-xs text-center">w-full</div>
        <div className="w-32 bg-blue-500 text-white p-2 rounded text-xs text-center">w-32</div>
      </div>
    ),
  },
  {
    id: "min-width",
    name: "Min-Width",
    category: "tailwind-properties",
    description: "Utilities for setting the minimum width of an element.",
    code: `min-w-0
min-w-full
min-w-min
min-w-max`,
    usage: "Use min-w-{size} to set minimum width",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="min-w-full bg-purple-500 text-white p-2 rounded text-xs text-center">
          min-w-full
        </div>
      </div>
    ),
  },
  {
    id: "max-width",
    name: "Max-Width",
    category: "tailwind-properties",
    description: "Utilities for setting the maximum width of an element.",
    code: `max-w-xs max-w-sm max-w-md
max-w-lg max-w-xl max-w-2xl
max-w-full max-w-none`,
    usage: "Use max-w-{size} to set maximum width",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="max-w-xs bg-purple-500 text-white p-2 rounded text-xs text-center mx-auto">
          max-w-xs (centered with mx-auto)
        </div>
      </div>
    ),
  },
  {
    id: "height",
    name: "Height",
    category: "tailwind-properties",
    description: "Utilities for setting the height of an element.",
    code: `h-0 h-1 h-2 h-4 h-8
h-1/2 h-full h-screen
h-auto`,
    usage: "Use h-{size} to set height",
    preview: (
      <div className="flex gap-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="h-16 w-16 bg-purple-500 text-white rounded text-xs flex items-center justify-center">h-16</div>
        <div className="h-24 w-16 bg-pink-500 text-white rounded text-xs flex items-center justify-center">h-24</div>
        <div className="h-32 w-16 bg-blue-500 text-white rounded text-xs flex items-center justify-center">h-32</div>
      </div>
    ),
  },
  {
    id: "min-height",
    name: "Min-Height",
    category: "tailwind-properties",
    description: "Utilities for setting the minimum height of an element.",
    code: `min-h-0
min-h-full
min-h-screen`,
    usage: "Use min-h-{size} to set minimum height",
    preview: (
      <div className="min-h-32 bg-purple-500 text-white p-4 rounded text-xs flex items-center justify-center">
        min-h-32 - minimum height of 8rem
      </div>
    ),
  },
  {
    id: "max-height",
    name: "Max-Height",
    category: "tailwind-properties",
    description: "Utilities for setting the maximum height of an element.",
    code: `max-h-0
max-h-full
max-h-screen`,
    usage: "Use max-h-{size} to set maximum height",
    preview: (
      <div className="max-h-24 overflow-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="h-48 bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs">
          max-h-24 with overflow-auto
        </div>
      </div>
    ),
  },
  {
    id: "size",
    name: "Size",
    category: "tailwind-properties",
    description: "Utilities for setting the width and height of an element at the same time.",
    code: `size-0
size-1
size-4
size-8
size-full`,
    usage: "Use size-{value} to set both dimensions",
    preview: (
      <div className="flex gap-4 items-end bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="size-8 bg-purple-500 rounded flex items-center justify-center text-white text-xs">8</div>
        <div className="size-16 bg-pink-500 rounded flex items-center justify-center text-white text-xs">16</div>
        <div className="size-24 bg-blue-500 rounded flex items-center justify-center text-white text-xs">24</div>
      </div>
    ),
  },

  // TYPOGRAPHY PROPERTIES
  {
    id: "font-family",
    name: "Font Family",
    category: "tailwind-properties",
    description: "Utilities for controlling the font family of an element.",
    code: `font-sans
font-serif
font-mono`,
    usage: "Use font-{family} to set font family",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="font-sans text-sm">font-sans: The quick brown fox jumps</p>
        <p className="font-serif text-sm">font-serif: The quick brown fox jumps</p>
        <p className="font-mono text-sm">font-mono: The quick brown fox jumps</p>
      </div>
    ),
  },
  {
    id: "font-size",
    name: "Font Size",
    category: "tailwind-properties",
    description: "Utilities for controlling the font size of an element.",
    code: `text-xs text-sm text-base
text-lg text-xl text-2xl
text-3xl text-4xl text-5xl`,
    usage: "Use text-{size} to set font size",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-xs">text-xs: Font size</p>
        <p className="text-sm">text-sm: Font size</p>
        <p className="text-base">text-base: Font size</p>
        <p className="text-lg">text-lg: Font size</p>
        <p className="text-xl">text-xl: Font size</p>
        <p className="text-2xl">text-2xl: Font size</p>
      </div>
    ),
  },
  {
    id: "font-smoothing",
    name: "Font Smoothing",
    category: "tailwind-properties",
    description: "Utilities for controlling the font smoothing of an element.",
    code: `antialiased
subpixel-antialiased`,
    usage: "Use antialiased for font smoothing",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="antialiased text-lg">antialiased: Smooth text rendering</p>
        <p className="subpixel-antialiased text-lg">subpixel-antialiased: Sharper rendering</p>
      </div>
    ),
  },
  {
    id: "font-style",
    name: "Font Style",
    category: "tailwind-properties",
    description: "Utilities for controlling the style of text.",
    code: `italic
not-italic`,
    usage: "Use italic for italic text",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="italic">This text is italic</p>
        <p className="not-italic">This text is not italic</p>
      </div>
    ),
  },
  {
    id: "font-weight",
    name: "Font Weight",
    category: "tailwind-properties",
    description: "Utilities for controlling the font weight of an element.",
    code: `font-thin font-light font-normal
font-medium font-semibold
font-bold font-extrabold font-black`,
    usage: "Use font-{weight} to set font weight",
    preview: (
      <div className="space-y-1 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="font-light text-sm">font-light (300)</p>
        <p className="font-normal text-sm">font-normal (400)</p>
        <p className="font-medium text-sm">font-medium (500)</p>
        <p className="font-semibold text-sm">font-semibold (600)</p>
        <p className="font-bold text-sm">font-bold (700)</p>
        <p className="font-extrabold text-sm">font-extrabold (800)</p>
      </div>
    ),
  },
  {
    id: "font-variant-numeric",
    name: "Font Variant Numeric",
    category: "tailwind-properties",
    description: "Utilities for controlling the variant of numbers.",
    code: `normal-nums
ordinal
slashed-zero
lining-nums
oldstyle-nums
proportional-nums
tabular-nums`,
    usage: "Use numeric variants for number styling",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="normal-nums text-sm">normal-nums: 0123456789</p>
        <p className="tabular-nums text-sm">tabular-nums: 0123456789</p>
        <p className="slashed-zero text-sm">slashed-zero: 0123456789</p>
      </div>
    ),
  },
  {
    id: "letter-spacing",
    name: "Letter Spacing",
    category: "tailwind-properties",
    description: "Utilities for controlling the tracking (letter spacing) of an element.",
    code: `tracking-tighter
tracking-tight
tracking-normal
tracking-wide
tracking-wider
tracking-widest`,
    usage: "Use tracking-{size} for letter spacing",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="tracking-tight text-sm">tracking-tight: Letter spacing</p>
        <p className="tracking-normal text-sm">tracking-normal: Letter spacing</p>
        <p className="tracking-wide text-sm">tracking-wide: Letter spacing</p>
        <p className="tracking-wider text-sm">tracking-wider: Letter spacing</p>
      </div>
    ),
  },
  {
    id: "line-clamp",
    name: "Line Clamp",
    category: "tailwind-properties",
    description: "Utilities for clamping text to a specific number of lines.",
    code: `line-clamp-1
line-clamp-2
line-clamp-3
line-clamp-none`,
    usage: "Use line-clamp-{lines} to truncate text",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="line-clamp-2 text-sm">
          line-clamp-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
        <div className="line-clamp-1 text-sm">
          line-clamp-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    ),
  },
  {
    id: "line-height",
    name: "Line Height",
    category: "tailwind-properties",
    description: "Utilities for controlling the leading (line height) of an element.",
    code: `leading-none leading-tight
leading-normal leading-relaxed
leading-loose`,
    usage: "Use leading-{size} for line height",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="leading-tight text-sm bg-white dark:bg-gray-800 p-2 rounded">
          <p>leading-tight: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
        <div className="leading-loose text-sm bg-white dark:bg-gray-800 p-2 rounded">
          <p>leading-loose: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
        </div>
      </div>
    ),
  },
  {
    id: "list-style-image",
    name: "List Style Image",
    category: "tailwind-properties",
    description: "Utilities for controlling the marker images for list items.",
    code: `list-image-none`,
    usage: "Use list-image-{value} for list markers",
    preview: (
      <ul className="list-disc list-inside bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-sm">
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
    ),
  },
  {
    id: "list-style-position",
    name: "List Style Position",
    category: "tailwind-properties",
    description: "Utilities for controlling the position of bullets/numbers in lists.",
    code: `list-inside
list-outside`,
    usage: "Use list-{position} for list positioning",
    preview: (
      <div className="space-y-4">
        <ul className="list-disc list-inside bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-sm">
          <li>list-inside item</li>
          <li>list-inside item</li>
        </ul>
        <ul className="list-disc list-outside ml-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-sm">
          <li>list-outside item</li>
          <li>list-outside item</li>
        </ul>
      </div>
    ),
  },
  {
    id: "list-style-type",
    name: "List Style Type",
    category: "tailwind-properties",
    description: "Utilities for controlling the bullet/number style of a list.",
    code: `list-none
list-disc
list-decimal`,
    usage: "Use list-{type} for list styling",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <ul className="list-disc list-inside bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-sm">
          <li>list-disc</li>
          <li>Bullet point</li>
        </ul>
        <ol className="list-decimal list-inside bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-sm">
          <li>list-decimal</li>
          <li>Numbered</li>
        </ol>
      </div>
    ),
  },
  {
    id: "text-align",
    name: "Text Align",
    category: "tailwind-properties",
    description: "Utilities for controlling the alignment of text.",
    code: `text-left
text-center
text-right
text-justify`,
    usage: "Use text-{alignment} for text alignment",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-left text-sm bg-white dark:bg-gray-800 p-2 rounded">text-left aligned</p>
        <p className="text-center text-sm bg-white dark:bg-gray-800 p-2 rounded">text-center aligned</p>
        <p className="text-right text-sm bg-white dark:bg-gray-800 p-2 rounded">text-right aligned</p>
      </div>
    ),
  },
  {
    id: "text-color",
    name: "Text Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the text color of an element.",
    code: `text-black text-white
text-gray-500 text-red-500
text-purple-500 text-blue-500`,
    usage: "Use text-{color} for text color",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="text-purple-500 font-semibold">text-purple-500</p>
        <p className="text-pink-500 font-semibold">text-pink-500</p>
        <p className="text-blue-500 font-semibold">text-blue-500</p>
        <p className="text-green-500 font-semibold">text-green-500</p>
      </div>
    ),
  },
  {
    id: "text-decoration",
    name: "Text Decoration",
    category: "tailwind-properties",
    description: "Utilities for controlling the decoration of text.",
    code: `underline
overline
line-through
no-underline`,
    usage: "Use decoration utilities for text styling",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="underline">underline text</p>
        <p className="line-through">line-through text</p>
        <p className="overline">overline text</p>
        <p className="no-underline">no-underline text</p>
      </div>
    ),
  },
  {
    id: "text-decoration-color",
    name: "Text Decoration Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the color of text decorations.",
    code: `decoration-purple-500
decoration-pink-500
decoration-blue-500`,
    usage: "Use decoration-{color} for decoration color",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="underline decoration-purple-500 decoration-2">Purple underline</p>
        <p className="underline decoration-pink-500 decoration-2">Pink underline</p>
        <p className="underline decoration-blue-500 decoration-2">Blue underline</p>
      </div>
    ),
  },
  {
    id: "text-decoration-style",
    name: "Text Decoration Style",
    category: "tailwind-properties",
    description: "Utilities for controlling the style of text decorations.",
    code: `decoration-solid
decoration-double
decoration-dotted
decoration-dashed
decoration-wavy`,
    usage: "Use decoration-{style} for decoration style",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="underline decoration-solid decoration-2">decoration-solid</p>
        <p className="underline decoration-double decoration-2">decoration-double</p>
        <p className="underline decoration-dotted decoration-2">decoration-dotted</p>
        <p className="underline decoration-dashed decoration-2">decoration-dashed</p>
        <p className="underline decoration-wavy decoration-2">decoration-wavy</p>
      </div>
    ),
  },
  {
    id: "text-decoration-thickness",
    name: "Text Decoration Thickness",
    category: "tailwind-properties",
    description: "Utilities for controlling the thickness of text decorations.",
    code: `decoration-auto
decoration-from-font
decoration-0 decoration-1
decoration-2 decoration-4 decoration-8`,
    usage: "Use decoration-{thickness} for line thickness",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="underline decoration-1">decoration-1</p>
        <p className="underline decoration-2">decoration-2</p>
        <p className="underline decoration-4">decoration-4</p>
        <p className="underline decoration-8">decoration-8</p>
      </div>
    ),
  },
  {
    id: "text-underline-offset",
    name: "Text Underline Offset",
    category: "tailwind-properties",
    description: "Utilities for controlling the offset of a text underline.",
    code: `underline-offset-auto
underline-offset-0
underline-offset-1
underline-offset-2
underline-offset-4
underline-offset-8`,
    usage: "Use underline-offset-{size} for offset",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="underline underline-offset-1 decoration-2">underline-offset-1</p>
        <p className="underline underline-offset-2 decoration-2">underline-offset-2</p>
        <p className="underline underline-offset-4 decoration-2">underline-offset-4</p>
        <p className="underline underline-offset-8 decoration-2">underline-offset-8</p>
      </div>
    ),
  },
  {
    id: "text-transform",
    name: "Text Transform",
    category: "tailwind-properties",
    description: "Utilities for controlling the transformation of text.",
    code: `uppercase
lowercase
capitalize
normal-case`,
    usage: "Use text transform for case changes",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="uppercase">uppercase text</p>
        <p className="lowercase">LOWERCASE TEXT</p>
        <p className="capitalize">capitalize each word</p>
        <p className="normal-case">normal-case text</p>
      </div>
    ),
  },
  {
    id: "text-overflow",
    name: "Text Overflow",
    category: "tailwind-properties",
    description: "Utilities for controlling text overflow in an element.",
    code: `truncate
text-ellipsis
text-clip`,
    usage: "Use truncate for text overflow",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="truncate text-sm bg-white dark:bg-gray-800 p-2 rounded">
          truncate: This is a very long text that will be truncated with an ellipsis when it overflows
        </p>
        <p className="text-clip overflow-hidden text-sm bg-white dark:bg-gray-800 p-2 rounded">
          text-clip: This is a very long text that will be clipped when it overflows
        </p>
      </div>
    ),
  },
  {
    id: "text-wrap",
    name: "Text Wrap",
    category: "tailwind-properties",
    description: "Utilities for controlling how text wraps within an element.",
    code: `text-wrap
text-nowrap
text-balance
text-pretty`,
    usage: "Use text wrapping utilities",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="text-wrap text-sm bg-white dark:bg-gray-800 p-2 rounded w-48">
          text-wrap: This text will wrap normally when it reaches the container edge
        </div>
        <div className="text-nowrap text-sm bg-white dark:bg-gray-800 p-2 rounded w-48 overflow-x-auto">
          text-nowrap: This text will not wrap at all
        </div>
      </div>
    ),
  },
  {
    id: "text-indent",
    name: "Text Indent",
    category: "tailwind-properties",
    description: "Utilities for controlling the amount of empty space shown before text in a block.",
    code: `indent-0
indent-px
indent-4
indent-8`,
    usage: "Use indent-{size} for text indentation",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="indent-0 text-sm">indent-0: No indentation on this paragraph</p>
        <p className="indent-4 text-sm">indent-4: Small indentation on this paragraph</p>
        <p className="indent-8 text-sm">indent-8: Larger indentation on this paragraph</p>
      </div>
    ),
  },
  {
    id: "vertical-align",
    name: "Vertical Align",
    category: "tailwind-properties",
    description: "Utilities for controlling the vertical alignment of an inline or table-cell box.",
    code: `align-baseline
align-top
align-middle
align-bottom
align-text-top
align-text-bottom`,
    usage: "Use align-{value} for vertical alignment",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <span className="text-4xl">Large</span>
        <span className="align-baseline text-xs bg-purple-200 dark:bg-purple-800 px-2">baseline</span>
        <span className="align-top text-xs bg-pink-200 dark:bg-pink-800 px-2">top</span>
        <span className="align-middle text-xs bg-blue-200 dark:bg-blue-800 px-2">middle</span>
        <span className="align-bottom text-xs bg-green-200 dark:bg-green-800 px-2">bottom</span>
      </div>
    ),
  },
  {
    id: "whitespace",
    name: "Whitespace",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's white-space property.",
    code: `whitespace-normal
whitespace-nowrap
whitespace-pre
whitespace-pre-line
whitespace-pre-wrap
whitespace-break-spaces`,
    usage: "Use whitespace-{value} to control whitespace",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="whitespace-normal text-sm bg-white dark:bg-gray-800 p-2 rounded w-48">
          whitespace-normal: Text     with    spaces    wraps normally
        </div>
        <div className="whitespace-nowrap text-sm bg-white dark:bg-gray-800 p-2 rounded w-48 overflow-x-auto">
          whitespace-nowrap: Long text that will not wrap
        </div>
      </div>
    ),
  },
  {
    id: "word-break",
    name: "Word Break",
    category: "tailwind-properties",
    description: "Utilities for controlling word breaks in an element.",
    code: `break-normal
break-words
break-all
break-keep`,
    usage: "Use break-{value} for word breaking",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="break-normal text-sm bg-white dark:bg-gray-800 p-2 rounded w-48">
          break-normal: supercalifragilisticexpialidocious
        </div>
        <div className="break-all text-sm bg-white dark:bg-gray-800 p-2 rounded w-48">
          break-all: supercalifragilisticexpialidocious
        </div>
      </div>
    ),
  },
  {
    id: "hyphens",
    name: "Hyphens",
    category: "tailwind-properties",
    description: "Utilities for controlling how words should be hyphenated.",
    code: `hyphens-none
hyphens-manual
hyphens-auto`,
    usage: "Use hyphens-{value} for hyphenation",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="hyphens-auto text-sm bg-white dark:bg-gray-800 p-2 rounded w-32" lang="en">
          Supercalifragilisticexpialidocious
        </div>
      </div>
    ),
  },
  {
    id: "content",
    name: "Content",
    category: "tailwind-properties",
    description: "Utilities for controlling the content of the before and after pseudo-elements.",
    code: `content-none
before:content-['']
after:content-['']`,
    usage: "Use content utilities with pseudo-elements",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="before:content-['⭐_'] after:content-['_⭐'] text-sm">
          Before and After content
        </p>
      </div>
    ),
  },

  // BACKGROUND PROPERTIES
  {
    id: "background-attachment",
    name: "Background Attachment",
    category: "tailwind-properties",
    description: "Utilities for controlling how a background image behaves when scrolling.",
    code: `bg-fixed
bg-local
bg-scroll`,
    usage: "Use bg-{attachment} for background attachment",
    preview: (
      <div className="h-32 overflow-auto bg-fixed bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold">
        <div className="h-64">Scroll to see bg-fixed effect</div>
      </div>
    ),
  },
  {
    id: "background-clip",
    name: "Background Clip",
    category: "tailwind-properties",
    description: "Utilities for controlling the bounding box of an element's background.",
    code: `bg-clip-border
bg-clip-padding
bg-clip-content
bg-clip-text`,
    usage: "Use bg-clip-{area} for background clipping",
    preview: (
      <div className="space-y-4">
        <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          bg-clip-text
        </div>
        <div className="bg-clip-padding p-4 border-4 border-dashed border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
          <p className="text-white text-sm">bg-clip-padding</p>
        </div>
      </div>
    ),
  },
  {
    id: "background-color",
    name: "Background Color",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's background color.",
    code: `bg-transparent bg-white bg-black
bg-gray-500 bg-purple-500
bg-pink-500 bg-blue-500`,
    usage: "Use bg-{color} for background color",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-purple-500 p-4 rounded text-white text-xs text-center">purple-500</div>
        <div className="bg-pink-500 p-4 rounded text-white text-xs text-center">pink-500</div>
        <div className="bg-blue-500 p-4 rounded text-white text-xs text-center">blue-500</div>
        <div className="bg-green-500 p-4 rounded text-white text-xs text-center">green-500</div>
        <div className="bg-yellow-500 p-4 rounded text-white text-xs text-center">yellow-500</div>
        <div className="bg-red-500 p-4 rounded text-white text-xs text-center">red-500</div>
      </div>
    ),
  },
  {
    id: "background-origin",
    name: "Background Origin",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element's background is positioned relative to borders, padding, and content.",
    code: `bg-origin-border
bg-origin-padding
bg-origin-content`,
    usage: "Use bg-origin-{box} for background origin",
    preview: (
      <div className="bg-origin-border p-8 border-8 border-dashed border-purple-500 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
        <p className="text-white text-sm">bg-origin-border</p>
      </div>
    ),
  },
  {
    id: "background-position",
    name: "Background Position",
    category: "tailwind-properties",
    description: "Utilities for controlling the position of an element's background image.",
    code: `bg-bottom bg-center bg-left
bg-right bg-top
bg-left-bottom bg-left-top`,
    usage: "Use bg-{position} for background position",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {["top", "center", "bottom"].map((pos) => (
          <div key={pos} className={`h-24 bg-${pos} bg-no-repeat bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold bg-[length:50%_50%]`}>
            bg-{pos}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "background-repeat",
    name: "Background Repeat",
    category: "tailwind-properties",
    description: "Utilities for controlling the repetition of an element's background image.",
    code: `bg-repeat
bg-no-repeat
bg-repeat-x
bg-repeat-y
bg-repeat-round
bg-repeat-space`,
    usage: "Use bg-{repeat} for background repeat",
    preview: (
      <div className="space-y-2">
        <div className="h-24 bg-repeat bg-[length:30px_30px] rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">bg-repeat</span>
        </div>
        <div className="h-24 bg-no-repeat bg-[length:30px_30px] rounded bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">bg-no-repeat</span>
        </div>
      </div>
    ),
  },
  {
    id: "background-size",
    name: "Background Size",
    category: "tailwind-properties",
    description: "Utilities for controlling the background size of an element's background image.",
    code: `bg-auto
bg-cover
bg-contain`,
    usage: "Use bg-{size} for background size",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="h-24 bg-cover bg-center bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          bg-cover
        </div>
        <div className="h-24 bg-contain bg-center bg-no-repeat bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          bg-contain
        </div>
      </div>
    ),
  },
  {
    id: "background-image",
    name: "Background Image",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's background image.",
    code: `bg-none
bg-gradient-to-t
bg-gradient-to-tr
bg-gradient-to-r
bg-gradient-to-br
bg-gradient-to-b
bg-gradient-to-bl
bg-gradient-to-l
bg-gradient-to-tl`,
    usage: "Use bg-gradient-to-{direction} for gradients",
    preview: (
      <div className="grid grid-cols-2 gap-2">
        <div className="h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          to-r
        </div>
        <div className="h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          to-br
        </div>
        <div className="h-20 bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          to-b
        </div>
        <div className="h-20 bg-gradient-to-tl from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          to-tl
        </div>
      </div>
    ),
  },
  {
    id: "gradient-color-stops",
    name: "Gradient Color Stops",
    category: "tailwind-properties",
    description: "Utilities for controlling the color stops in background gradients.",
    code: `from-purple-500
via-pink-500
to-blue-500`,
    usage: "Use from/via/to-{color} for gradient colors",
    preview: (
      <div className="space-y-2">
        <div className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          from-purple-500 to-pink-500
        </div>
        <div className="h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded flex items-center justify-center text-white text-xs font-semibold">
          from-purple via-pink to-blue
        </div>
      </div>
    ),
  },

  // BORDER PROPERTIES
  {
    id: "border-radius",
    name: "Border Radius",
    category: "tailwind-properties",
    description: "Utilities for controlling the border radius of an element.",
    code: `rounded-none rounded-sm
rounded rounded-md rounded-lg
rounded-xl rounded-2xl rounded-3xl
rounded-full`,
    usage: "Use rounded-{size} for border radius",
    preview: (
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-none bg-purple-500 p-4 text-white text-xs text-center">none</div>
        <div className="rounded bg-purple-500 p-4 text-white text-xs text-center">rounded</div>
        <div className="rounded-lg bg-purple-500 p-4 text-white text-xs text-center">lg</div>
        <div className="rounded-xl bg-purple-500 p-4 text-white text-xs text-center">xl</div>
        <div className="rounded-2xl bg-purple-500 p-4 text-white text-xs text-center">2xl</div>
        <div className="rounded-3xl bg-purple-500 p-4 text-white text-xs text-center">3xl</div>
        <div className="rounded-full bg-purple-500 w-16 h-16 flex items-center justify-center text-white text-xs">full</div>
      </div>
    ),
  },
  {
    id: "border-width",
    name: "Border Width",
    category: "tailwind-properties",
    description: "Utilities for controlling the width of an element's borders.",
    code: `border-0 border border-2
border-4 border-8
border-x-2 border-y-2
border-t-2 border-r-2 border-b-2 border-l-2`,
    usage: "Use border-{width} for border width",
    preview: (
      <div className="grid grid-cols-4 gap-4">
        <div className="border bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">border</div>
        <div className="border-2 border-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">border-2</div>
        <div className="border-4 border-pink-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">border-4</div>
        <div className="border-8 border-blue-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">border-8</div>
      </div>
    ),
  },
  {
    id: "border-color",
    name: "Border Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the color of an element's borders.",
    code: `border-purple-500
border-pink-500
border-blue-500`,
    usage: "Use border-{color} for border color",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="border-4 border-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">purple</div>
        <div className="border-4 border-pink-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">pink</div>
        <div className="border-4 border-blue-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">blue</div>
      </div>
    ),
  },
  {
    id: "border-style",
    name: "Border Style",
    category: "tailwind-properties",
    description: "Utilities for controlling the style of an element's borders.",
    code: `border-solid
border-dashed
border-dotted
border-double
border-none`,
    usage: "Use border-{style} for border style",
    preview: (
      <div className="space-y-2">
        <div className="border-2 border-solid border-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">border-solid</div>
        <div className="border-2 border-dashed border-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">border-dashed</div>
        <div className="border-2 border-dotted border-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">border-dotted</div>
        <div className="border-4 border-double border-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">border-double</div>
      </div>
    ),
  },
  {
    id: "divide-width",
    name: "Divide Width",
    category: "tailwind-properties",
    description: "Utilities for controlling the border width between elements.",
    code: `divide-x divide-x-2 divide-x-4
divide-y divide-y-2 divide-y-4`,
    usage: "Use divide-{axis}-{width} for dividers",
    preview: (
      <div className="space-y-4">
        <div className="flex divide-x-2 divide-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden">
          <div className="p-4 text-xs">Item 1</div>
          <div className="p-4 text-xs">Item 2</div>
          <div className="p-4 text-xs">Item 3</div>
        </div>
        <div className="divide-y-2 divide-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden">
          <div className="p-4 text-xs">Item 1</div>
          <div className="p-4 text-xs">Item 2</div>
          <div className="p-4 text-xs">Item 3</div>
        </div>
      </div>
    ),
  },
  {
    id: "divide-color",
    name: "Divide Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the border color between elements.",
    code: `divide-purple-500
divide-pink-500
divide-blue-500`,
    usage: "Use divide-{color} for divider color",
    preview: (
      <div className="flex divide-x-2 divide-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden">
        <div className="p-4 text-xs flex-1 text-center">Purple</div>
        <div className="p-4 text-xs flex-1 text-center">Divider</div>
        <div className="p-4 text-xs flex-1 text-center">Color</div>
      </div>
    ),
  },
  {
    id: "divide-style",
    name: "Divide Style",
    category: "tailwind-properties",
    description: "Utilities for controlling the border style between elements.",
    code: `divide-solid
divide-dashed
divide-dotted
divide-double
divide-none`,
    usage: "Use divide-{style} for divider style",
    preview: (
      <div className="space-y-4">
        <div className="flex divide-x-2 divide-dashed divide-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden">
          <div className="p-4 text-xs flex-1 text-center">dashed</div>
          <div className="p-4 text-xs flex-1 text-center">divider</div>
        </div>
        <div className="flex divide-x-2 divide-dotted divide-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-lg overflow-hidden">
          <div className="p-4 text-xs flex-1 text-center">dotted</div>
          <div className="p-4 text-xs flex-1 text-center">divider</div>
        </div>
      </div>
    ),
  },
  {
    id: "outline-width",
    name: "Outline Width",
    category: "tailwind-properties",
    description: "Utilities for controlling the width of an element's outline.",
    code: `outline-0 outline-1
outline-2 outline-4 outline-8`,
    usage: "Use outline-{width} for outline width",
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="outline outline-1 outline-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">outline-1</div>
        <div className="outline outline-2 outline-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">outline-2</div>
        <div className="outline outline-4 outline-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">outline-4</div>
      </div>
    ),
  },
  {
    id: "outline-color",
    name: "Outline Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the color of an element's outline.",
    code: `outline-purple-500
outline-pink-500
outline-blue-500`,
    usage: "Use outline-{color} for outline color",
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="outline outline-2 outline-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">purple</div>
        <div className="outline outline-2 outline-pink-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">pink</div>
        <div className="outline outline-2 outline-blue-500 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">blue</div>
      </div>
    ),
  },
  {
    id: "outline-style",
    name: "Outline Style",
    category: "tailwind-properties",
    description: "Utilities for controlling the style of an element's outline.",
    code: `outline-none
outline
outline-dashed
outline-dotted
outline-double`,
    usage: "Use outline-{style} for outline style",
    preview: (
      <div className="space-y-4 p-4">
        <div className="outline outline-2 outline-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">outline (solid)</div>
        <div className="outline outline-2 outline-dashed outline-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">outline-dashed</div>
        <div className="outline outline-2 outline-dotted outline-purple-500 bg-white dark:bg-gray-800 p-2 rounded text-xs">outline-dotted</div>
      </div>
    ),
  },
  {
    id: "outline-offset",
    name: "Outline Offset",
    category: "tailwind-properties",
    description: "Utilities for controlling the offset of an element's outline.",
    code: `outline-offset-0
outline-offset-1
outline-offset-2
outline-offset-4
outline-offset-8`,
    usage: "Use outline-offset-{size} for outline offset",
    preview: (
      <div className="grid grid-cols-3 gap-8 p-4">
        <div className="outline outline-2 outline-purple-500 outline-offset-0 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">offset-0</div>
        <div className="outline outline-2 outline-purple-500 outline-offset-2 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">offset-2</div>
        <div className="outline outline-2 outline-purple-500 outline-offset-4 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">offset-4</div>
      </div>
    ),
  },
  {
    id: "ring-width",
    name: "Ring Width",
    category: "tailwind-properties",
    description: "Utilities for creating outline rings with box-shadows.",
    code: `ring-0 ring-1 ring-2
ring ring-4 ring-8
ring-inset`,
    usage: "Use ring-{width} for focus rings",
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <button className="ring-2 ring-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">ring-2</button>
        <button className="ring-4 ring-pink-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">ring-4</button>
        <button className="ring-8 ring-blue-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">ring-8</button>
      </div>
    ),
  },
  {
    id: "ring-color",
    name: "Ring Color",
    category: "tailwind-properties",
    description: "Utilities for setting the color of outline rings.",
    code: `ring-purple-500
ring-pink-500
ring-blue-500`,
    usage: "Use ring-{color} for ring color",
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <button className="ring-4 ring-purple-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">purple</button>
        <button className="ring-4 ring-pink-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">pink</button>
        <button className="ring-4 ring-blue-500 bg-white dark:bg-gray-800 p-4 rounded text-xs">blue</button>
      </div>
    ),
  },
  {
    id: "ring-offset-width",
    name: "Ring Offset Width",
    category: "tailwind-properties",
    description: "Utilities for simulating an offset when adding outline rings.",
    code: `ring-offset-0
ring-offset-1
ring-offset-2
ring-offset-4
ring-offset-8`,
    usage: "Use ring-offset-{width} for ring offset",
    preview: (
      <div className="grid grid-cols-3 gap-4 p-4">
        <button className="ring-4 ring-purple-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 bg-white dark:bg-gray-800 p-4 rounded text-xs">offset-2</button>
        <button className="ring-4 ring-pink-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 bg-white dark:bg-gray-800 p-4 rounded text-xs">offset-4</button>
      </div>
    ),
  },

  // EFFECTS PROPERTIES
  {
    id: "box-shadow",
    name: "Box Shadow",
    category: "tailwind-properties",
    description: "Utilities for controlling the box shadow of an element.",
    code: `shadow-sm shadow shadow-md
shadow-lg shadow-xl shadow-2xl
shadow-inner shadow-none`,
    usage: "Use shadow-{size} for box shadows",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-sm bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-sm</div>
        <div className="shadow-md bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-md</div>
        <div className="shadow-lg bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-lg</div>
        <div className="shadow-xl bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-xl</div>
        <div className="shadow-2xl bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-2xl</div>
        <div className="shadow-inner bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">shadow-inner</div>
      </div>
    ),
  },
  {
    id: "box-shadow-color",
    name: "Box Shadow Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the color of a box shadow.",
    code: `shadow-purple-500
shadow-pink-500
shadow-blue-500`,
    usage: "Use shadow-{color} for shadow color",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="shadow-lg shadow-purple-500/50 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">purple</div>
        <div className="shadow-lg shadow-pink-500/50 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">pink</div>
        <div className="shadow-lg shadow-blue-500/50 bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">blue</div>
      </div>
    ),
  },
  {
    id: "opacity",
    name: "Opacity",
    category: "tailwind-properties",
    description: "Utilities for controlling the opacity of an element.",
    code: `opacity-0 opacity-5 opacity-10
opacity-25 opacity-50 opacity-75
opacity-100`,
    usage: "Use opacity-{value} for opacity",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="opacity-100 bg-purple-500 text-white p-2 rounded text-xs text-center">opacity-100</div>
        <div className="opacity-75 bg-purple-500 text-white p-2 rounded text-xs text-center">opacity-75</div>
        <div className="opacity-50 bg-purple-500 text-white p-2 rounded text-xs text-center">opacity-50</div>
        <div className="opacity-25 bg-purple-500 text-white p-2 rounded text-xs text-center">opacity-25</div>
      </div>
    ),
  },
  {
    id: "mix-blend-mode",
    name: "Mix Blend Mode",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element should blend with the background.",
    code: `mix-blend-normal
mix-blend-multiply
mix-blend-screen
mix-blend-overlay
mix-blend-difference`,
    usage: "Use mix-blend-{mode} for blend modes",
    preview: (
      <div className="relative h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <div className="mix-blend-overlay bg-white w-24 h-24 rounded-full flex items-center justify-center text-xs font-semibold">
          overlay
        </div>
      </div>
    ),
  },
  {
    id: "background-blend-mode",
    name: "Background Blend Mode",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element's background image should blend with its background color.",
    code: `bg-blend-normal
bg-blend-multiply
bg-blend-screen
bg-blend-overlay`,
    usage: "Use bg-blend-{mode} for background blending",
    preview: (
      <div className="bg-blend-multiply bg-purple-500 bg-gradient-to-r from-transparent to-pink-500 h-24 rounded-lg flex items-center justify-center text-white font-semibold text-xs">
        bg-blend-multiply
      </div>
    ),
  },

  // FILTERS
  {
    id: "blur",
    name: "Blur",
    category: "tailwind-properties",
    description: "Utilities for applying blur filters to an element.",
    code: `blur-none blur-sm blur
blur-md blur-lg blur-xl
blur-2xl blur-3xl`,
    usage: "Use blur-{size} to blur elements",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="blur-none bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">none</div>
        <div className="blur-sm bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">blur-sm</div>
        <div className="blur bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">blur</div>
        <div className="blur-md bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">blur-md</div>
        <div className="blur-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">blur-lg</div>
        <div className="blur-xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">blur-xl</div>
      </div>
    ),
  },
  {
    id: "brightness",
    name: "Brightness",
    category: "tailwind-properties",
    description: "Utilities for applying brightness filters to an element.",
    code: `brightness-0 brightness-50
brightness-75 brightness-100
brightness-125 brightness-150
brightness-200`,
    usage: "Use brightness-{amount} to adjust brightness",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="brightness-50 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">50%</div>
        <div className="brightness-100 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">100%</div>
        <div className="brightness-150 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">150%</div>
      </div>
    ),
  },
  {
    id: "contrast",
    name: "Contrast",
    category: "tailwind-properties",
    description: "Utilities for applying contrast filters to an element.",
    code: `contrast-0 contrast-50
contrast-75 contrast-100
contrast-125 contrast-150
contrast-200`,
    usage: "Use contrast-{amount} to adjust contrast",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="contrast-50 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">50%</div>
        <div className="contrast-100 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">100%</div>
        <div className="contrast-150 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">150%</div>
      </div>
    ),
  },
  {
    id: "drop-shadow",
    name: "Drop Shadow",
    category: "tailwind-properties",
    description: "Utilities for applying drop-shadow filters to an element.",
    code: `drop-shadow-sm drop-shadow
drop-shadow-md drop-shadow-lg
drop-shadow-xl drop-shadow-2xl
drop-shadow-none`,
    usage: "Use drop-shadow-{size} for drop shadows",
    preview: (
      <div className="grid grid-cols-3 gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="drop-shadow-sm bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">drop-shadow-sm</div>
        <div className="drop-shadow-md bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">drop-shadow-md</div>
        <div className="drop-shadow-lg bg-white dark:bg-gray-800 p-4 rounded text-xs text-center">drop-shadow-lg</div>
      </div>
    ),
  },
  {
    id: "grayscale",
    name: "Grayscale",
    category: "tailwind-properties",
    description: "Utilities for applying grayscale filters to an element.",
    code: `grayscale-0
grayscale`,
    usage: "Use grayscale to remove color",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="grayscale-0 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">grayscale-0 (color)</div>
        <div className="grayscale bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">grayscale</div>
      </div>
    ),
  },
  {
    id: "hue-rotate",
    name: "Hue Rotate",
    category: "tailwind-properties",
    description: "Utilities for applying hue-rotate filters to an element.",
    code: `hue-rotate-0
hue-rotate-15
hue-rotate-30
hue-rotate-60
hue-rotate-90
hue-rotate-180`,
    usage: "Use hue-rotate-{degrees} to rotate hue",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="hue-rotate-0 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">0°</div>
        <div className="hue-rotate-90 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">90°</div>
        <div className="hue-rotate-180 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">180°</div>
      </div>
    ),
  },
  {
    id: "invert",
    name: "Invert",
    category: "tailwind-properties",
    description: "Utilities for applying invert filters to an element.",
    code: `invert-0
invert`,
    usage: "Use invert to invert colors",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="invert-0 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">invert-0</div>
        <div className="invert bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">invert</div>
      </div>
    ),
  },
  {
    id: "saturate",
    name: "Saturate",
    category: "tailwind-properties",
    description: "Utilities for applying saturation filters to an element.",
    code: `saturate-0 saturate-50
saturate-100 saturate-150
saturate-200`,
    usage: "Use saturate-{amount} to adjust saturation",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="saturate-0 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">0%</div>
        <div className="saturate-100 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">100%</div>
        <div className="saturate-200 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">200%</div>
      </div>
    ),
  },
  {
    id: "sepia",
    name: "Sepia",
    category: "tailwind-properties",
    description: "Utilities for applying sepia filters to an element.",
    code: `sepia-0
sepia`,
    usage: "Use sepia for sepia tone effect",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <div className="sepia-0 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">sepia-0</div>
        <div className="sepia bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded text-white text-xs text-center">sepia</div>
      </div>
    ),
  },
  {
    id: "backdrop-blur",
    name: "Backdrop Blur",
    category: "tailwind-properties",
    description: "Utilities for applying backdrop blur filters to an element.",
    code: `backdrop-blur-none
backdrop-blur-sm
backdrop-blur
backdrop-blur-md
backdrop-blur-lg
backdrop-blur-xl`,
    usage: "Use backdrop-blur-{size} for background blur",
    preview: (
      <div className="relative h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-lg bg-white/30 dark:bg-black/30 flex items-center justify-center">
          <span className="text-sm font-semibold">backdrop-blur-lg</span>
        </div>
      </div>
    ),
  },

  // TRANSFORMS
  {
    id: "scale",
    name: "Scale",
    category: "tailwind-properties",
    description: "Utilities for scaling elements with transform.",
    code: `scale-0 scale-50 scale-75
scale-90 scale-95 scale-100
scale-105 scale-110 scale-125
scale-150`,
    usage: "Use scale-{percentage} to scale elements",
    preview: (
      <div className="flex items-center justify-around h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="scale-75 bg-purple-500 text-white p-3 rounded text-xs">75%</div>
        <div className="scale-100 bg-pink-500 text-white p-3 rounded text-xs">100%</div>
        <div className="scale-125 bg-blue-500 text-white p-3 rounded text-xs">125%</div>
      </div>
    ),
  },
  {
    id: "rotate",
    name: "Rotate",
    category: "tailwind-properties",
    description: "Utilities for rotating elements with transform.",
    code: `rotate-0 rotate-1 rotate-3
rotate-6 rotate-12 rotate-45
rotate-90 rotate-180
-rotate-45`,
    usage: "Use rotate-{degrees} to rotate elements",
    preview: (
      <div className="flex items-center justify-around h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="rotate-0 bg-purple-500 text-white p-3 rounded text-xs">0°</div>
        <div className="rotate-45 bg-pink-500 text-white p-3 rounded text-xs">45°</div>
        <div className="rotate-90 bg-blue-500 text-white p-3 rounded text-xs">90°</div>
        <div className="-rotate-45 bg-green-500 text-white p-3 rounded text-xs">-45°</div>
      </div>
    ),
  },
  {
    id: "translate",
    name: "Translate",
    category: "tailwind-properties",
    description: "Utilities for translating elements with transform.",
    code: `translate-x-0 translate-x-1
translate-x-4 translate-x-8
translate-y-0 translate-y-1
-translate-x-4`,
    usage: "Use translate-{axis}-{amount} to move elements",
    preview: (
      <div className="relative h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="absolute top-8 left-8 bg-purple-500 text-white p-2 rounded text-xs">Original</div>
        <div className="absolute top-8 left-8 translate-x-12 bg-pink-500 text-white p-2 rounded text-xs">translate-x-12</div>
        <div className="absolute top-8 left-8 translate-y-12 bg-blue-500 text-white p-2 rounded text-xs">translate-y-12</div>
      </div>
    ),
  },
  {
    id: "skew",
    name: "Skew",
    category: "tailwind-properties",
    description: "Utilities for skewing elements with transform.",
    code: `skew-x-0 skew-x-1
skew-x-3 skew-x-6 skew-x-12
skew-y-0 skew-y-1
-skew-x-6`,
    usage: "Use skew-{axis}-{degrees} to skew elements",
    preview: (
      <div className="flex items-center justify-around h-32 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <div className="skew-x-0 bg-purple-500 text-white p-3 rounded text-xs">0°</div>
        <div className="skew-x-6 bg-pink-500 text-white p-3 rounded text-xs">6°</div>
        <div className="skew-x-12 bg-blue-500 text-white p-3 rounded text-xs">12°</div>
      </div>
    ),
  },
  {
    id: "transform-origin",
    name: "Transform Origin",
    category: "tailwind-properties",
    description: "Utilities for specifying the origin for an element's transformations.",
    code: `origin-center
origin-top origin-top-right
origin-right origin-bottom-right
origin-bottom origin-bottom-left
origin-left origin-top-left`,
    usage: "Use origin-{position} to set transform origin",
    preview: (
      <div className="grid grid-cols-3 gap-4 bg-purple-50 dark:bg-purple-900/20 p-8 rounded-lg">
        <div className="origin-center hover:rotate-45 transition-transform bg-purple-500 text-white p-3 rounded text-xs text-center">center</div>
        <div className="origin-top-left hover:rotate-45 transition-transform bg-pink-500 text-white p-3 rounded text-xs text-center">top-left</div>
        <div className="origin-bottom-right hover:rotate-45 transition-transform bg-blue-500 text-white p-3 rounded text-xs text-center">bottom-right</div>
      </div>
    ),
  },

  // INTERACTIVITY
  {
    id: "accent-color",
    name: "Accent Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the accented color of a form control.",
    code: `accent-auto
accent-purple-500
accent-pink-500
accent-blue-500`,
    usage: "Use accent-{color} for form control accents",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="accent-purple-500" defaultChecked />
          <span>Purple accent checkbox</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="radio" className="accent-pink-500" defaultChecked />
          <span>Pink accent radio</span>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="range" className="accent-blue-500" />
          <span>Blue accent range</span>
        </label>
      </div>
    ),
  },
  {
    id: "appearance",
    name: "Appearance",
    category: "tailwind-properties",
    description: "Utilities for suppressing native form control styling.",
    code: `appearance-none
appearance-auto`,
    usage: "Use appearance-none to remove default styling",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <select className="appearance-none bg-white dark:bg-gray-800 border border-purple-500 rounded px-3 py-2 text-sm w-full">
          <option>appearance-none select</option>
          <option>Option 2</option>
        </select>
        <select className="bg-white dark:bg-gray-800 border border-purple-500 rounded px-3 py-2 text-sm w-full">
          <option>Default appearance select</option>
          <option>Option 2</option>
        </select>
      </div>
    ),
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "tailwind-properties",
    description: "Utilities for controlling the cursor style when hovering over an element.",
    code: `cursor-auto cursor-default
cursor-pointer cursor-wait
cursor-text cursor-move
cursor-not-allowed cursor-grab`,
    usage: "Use cursor-{type} to change cursor",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        <div className="cursor-pointer bg-purple-200 dark:bg-purple-800 p-3 rounded text-xs text-center">pointer</div>
        <div className="cursor-move bg-pink-200 dark:bg-pink-800 p-3 rounded text-xs text-center">move</div>
        <div className="cursor-not-allowed bg-blue-200 dark:bg-blue-800 p-3 rounded text-xs text-center">not-allowed</div>
        <div className="cursor-grab bg-green-200 dark:bg-green-800 p-3 rounded text-xs text-center">grab</div>
        <div className="cursor-wait bg-yellow-200 dark:bg-yellow-800 p-3 rounded text-xs text-center">wait</div>
        <div className="cursor-text bg-red-200 dark:bg-red-800 p-3 rounded text-xs text-center">text</div>
      </div>
    ),
  },
  {
    id: "caret-color",
    name: "Caret Color",
    category: "tailwind-properties",
    description: "Utilities for controlling the color of the text input cursor.",
    code: `caret-purple-500
caret-pink-500
caret-blue-500`,
    usage: "Use caret-{color} for input cursor color",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <input type="text" placeholder="Purple caret" className="caret-purple-500 w-full px-3 py-2 border border-purple-500 rounded text-sm" />
        <input type="text" placeholder="Pink caret" className="caret-pink-500 w-full px-3 py-2 border border-pink-500 rounded text-sm" />
        <input type="text" placeholder="Blue caret" className="caret-blue-500 w-full px-3 py-2 border border-blue-500 rounded text-sm" />
      </div>
    ),
  },
  {
    id: "pointer-events",
    name: "Pointer Events",
    category: "tailwind-properties",
    description: "Utilities for controlling whether an element responds to pointer events.",
    code: `pointer-events-none
pointer-events-auto`,
    usage: "Use pointer-events-{value} to control interactions",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <button className="pointer-events-none bg-purple-500 text-white px-4 py-2 rounded text-xs opacity-50">
          pointer-events-none (not clickable)
        </button>
        <button className="pointer-events-auto bg-purple-500 text-white px-4 py-2 rounded text-xs hover:bg-purple-600">
          pointer-events-auto (clickable)
        </button>
      </div>
    ),
  },
  {
    id: "resize",
    name: "Resize",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element can be resized.",
    code: `resize-none
resize
resize-y
resize-x`,
    usage: "Use resize-{direction} to control resizing",
    preview: (
      <div className="space-y-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <textarea className="resize w-full h-20 p-2 border border-purple-500 rounded text-xs" placeholder="resize (both directions)"></textarea>
        <textarea className="resize-y w-full h-20 p-2 border border-pink-500 rounded text-xs" placeholder="resize-y (vertical only)"></textarea>
        <textarea className="resize-none w-full h-20 p-2 border border-blue-500 rounded text-xs" placeholder="resize-none (fixed size)"></textarea>
      </div>
    ),
  },
  {
    id: "scroll-behavior",
    name: "Scroll Behavior",
    category: "tailwind-properties",
    description: "Utilities for controlling the scroll behavior of an element.",
    code: `scroll-auto
scroll-smooth`,
    usage: "Use scroll-smooth for smooth scrolling",
    preview: (
      <div className="scroll-smooth h-32 overflow-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="h-64 bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-center justify-center text-white">
          Scroll to see smooth behavior
        </div>
      </div>
    ),
  },
  {
    id: "scroll-margin",
    name: "Scroll Margin",
    category: "tailwind-properties",
    description: "Utilities for controlling the scroll offset around items in a snap container.",
    code: `scroll-m-0 scroll-m-1
scroll-m-4 scroll-m-8
scroll-mx-4 scroll-my-4`,
    usage: "Use scroll-m-{size} for scroll margins",
    preview: (
      <div className="h-32 overflow-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg snap-y snap-mandatory">
        <div className="scroll-m-4 snap-start bg-purple-500 text-white p-4 rounded mb-2">Section 1 (scroll-m-4)</div>
        <div className="scroll-m-4 snap-start bg-pink-500 text-white p-4 rounded mb-2">Section 2 (scroll-m-4)</div>
        <div className="scroll-m-4 snap-start bg-blue-500 text-white p-4 rounded mb-2">Section 3 (scroll-m-4)</div>
      </div>
    ),
  },
  {
    id: "scroll-padding",
    name: "Scroll Padding",
    category: "tailwind-properties",
    description: "Utilities for controlling an element's scroll offset within a snap container.",
    code: `scroll-p-0 scroll-p-1
scroll-p-4 scroll-p-8
scroll-px-4 scroll-py-4`,
    usage: "Use scroll-p-{size} for scroll padding",
    preview: (
      <div className="h-32 scroll-p-4 overflow-auto bg-purple-50 dark:bg-purple-900/20 rounded-lg snap-y snap-mandatory">
        <div className="snap-start bg-purple-500 text-white p-4 rounded mb-2">Section 1</div>
        <div className="snap-start bg-pink-500 text-white p-4 rounded mb-2">Section 2</div>
        <div className="snap-start bg-blue-500 text-white p-4 rounded mb-2">Section 3</div>
      </div>
    ),
  },
  {
    id: "scroll-snap-align",
    name: "Scroll Snap Align",
    category: "tailwind-properties",
    description: "Utilities for controlling the scroll snap alignment of an element.",
    code: `snap-start
snap-end
snap-center
snap-align-none`,
    usage: "Use snap-{alignment} for snap positioning",
    preview: (
      <div className="h-32 overflow-x-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg snap-x snap-mandatory flex gap-4">
        <div className="snap-center flex-shrink-0 w-48 bg-purple-500 text-white p-4 rounded">snap-center 1</div>
        <div className="snap-center flex-shrink-0 w-48 bg-pink-500 text-white p-4 rounded">snap-center 2</div>
        <div className="snap-center flex-shrink-0 w-48 bg-blue-500 text-white p-4 rounded">snap-center 3</div>
      </div>
    ),
  },
  {
    id: "scroll-snap-stop",
    name: "Scroll Snap Stop",
    category: "tailwind-properties",
    description: "Utilities for controlling whether you can skip past possible snap positions.",
    code: `snap-normal
snap-always`,
    usage: "Use snap-{type} to control snap behavior",
    preview: (
      <div className="h-32 overflow-x-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg snap-x snap-mandatory flex gap-4">
        <div className="snap-always snap-center flex-shrink-0 w-48 bg-purple-500 text-white p-4 rounded">snap-always 1</div>
        <div className="snap-always snap-center flex-shrink-0 w-48 bg-pink-500 text-white p-4 rounded">snap-always 2</div>
        <div className="snap-always snap-center flex-shrink-0 w-48 bg-blue-500 text-white p-4 rounded">snap-always 3</div>
      </div>
    ),
  },
  {
    id: "scroll-snap-type",
    name: "Scroll Snap Type",
    category: "tailwind-properties",
    description: "Utilities for controlling how strictly snap points are enforced in a snap container.",
    code: `snap-none
snap-x snap-y snap-both
snap-mandatory snap-proximity`,
    usage: "Use snap-{axis} and snap-{strictness}",
    preview: (
      <div className="h-32 overflow-x-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg snap-x snap-mandatory flex gap-4">
        <div className="snap-center flex-shrink-0 w-48 bg-purple-500 text-white p-4 rounded">Item 1</div>
        <div className="snap-center flex-shrink-0 w-48 bg-pink-500 text-white p-4 rounded">Item 2</div>
        <div className="snap-center flex-shrink-0 w-48 bg-blue-500 text-white p-4 rounded">Item 3</div>
      </div>
    ),
  },
  {
    id: "touch-action",
    name: "Touch Action",
    category: "tailwind-properties",
    description: "Utilities for controlling how an element can be scrolled and zoomed on touchscreens.",
    code: `touch-auto
touch-none
touch-pan-x
touch-pan-y
touch-pinch-zoom
touch-manipulation`,
    usage: "Use touch-{action} for touch behavior",
    preview: (
      <div className="touch-pan-y h-32 overflow-auto bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="h-64 bg-gradient-to-b from-purple-500 to-pink-500 rounded flex items-center justify-center text-white">
          touch-pan-y (vertical scrolling only)
        </div>
      </div>
    ),
  },
  {
    id: "user-select",
    name: "User Select",
    category: "tailwind-properties",
    description: "Utilities for controlling whether the user can select text in an element.",
    code: `select-none
select-text
select-all
select-auto`,
    usage: "Use select-{value} to control text selection",
    preview: (
      <div className="space-y-2 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <p className="select-none text-sm bg-white dark:bg-gray-800 p-2 rounded">select-none: This text cannot be selected</p>
        <p className="select-text text-sm bg-white dark:bg-gray-800 p-2 rounded">select-text: This text can be selected normally</p>
        <p className="select-all text-sm bg-white dark:bg-gray-800 p-2 rounded">select-all: Click to select all</p>
      </div>
    ),
  },
  {
    id: "will-change",
    name: "Will Change",
    category: "tailwind-properties",
    description: "Utilities for optimizing upcoming animations of elements that are expected to change.",
    code: `will-change-auto
will-change-scroll
will-change-contents
will-change-transform`,
    usage: "Use will-change-{property} for optimization",
    preview: (
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="will-change-transform hover:scale-110 transition-transform bg-purple-500 text-white p-4 rounded text-xs text-center">
          will-change-transform (optimized for transform animations)
        </div>
      </div>
    ),
  },

  // TRANSITIONS & ANIMATION
  {
    id: "transition-property",
    name: "Transition Property",
    category: "tailwind-properties",
    description: "Utilities for controlling which CSS properties transition.",
    code: `transition-none
transition-all
transition
transition-colors
transition-opacity
transition-shadow
transition-transform`,
    usage: "Use transition-{properties} for transitions",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <button className="transition-all hover:bg-purple-600 hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded text-xs">
          transition-all
        </button>
        <button className="transition-colors hover:bg-pink-600 bg-pink-500 text-white px-4 py-2 rounded text-xs">
          transition-colors
        </button>
        <button className="transition-transform hover:scale-110 bg-blue-500 text-white px-4 py-2 rounded text-xs">
          transition-transform
        </button>
        <button className="transition-opacity hover:opacity-50 bg-green-500 text-white px-4 py-2 rounded text-xs">
          transition-opacity
        </button>
      </div>
    ),
  },
  {
    id: "transition-duration",
    name: "Transition Duration",
    category: "tailwind-properties",
    description: "Utilities for controlling the duration of CSS transitions.",
    code: `duration-0 duration-75
duration-100 duration-150
duration-200 duration-300
duration-500 duration-700
duration-1000`,
    usage: "Use duration-{milliseconds} for timing",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <button className="transition-all duration-75 hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded text-xs">
          75ms
        </button>
        <button className="transition-all duration-300 hover:scale-110 bg-pink-500 text-white px-4 py-2 rounded text-xs">
          300ms
        </button>
        <button className="transition-all duration-700 hover:scale-110 bg-blue-500 text-white px-4 py-2 rounded text-xs">
          700ms
        </button>
      </div>
    ),
  },
  {
    id: "transition-timing-function",
    name: "Transition Timing",
    category: "tailwind-properties",
    description: "Utilities for controlling the easing of CSS transitions.",
    code: `ease-linear
ease-in ease-out ease-in-out`,
    usage: "Use ease-{function} for easing",
    preview: (
      <div className="grid grid-cols-2 gap-4">
        <button className="transition-all duration-300 ease-linear hover:translate-x-2 bg-purple-500 text-white px-4 py-2 rounded text-xs">
          ease-linear
        </button>
        <button className="transition-all duration-300 ease-in-out hover:translate-x-2 bg-pink-500 text-white px-4 py-2 rounded text-xs">
          ease-in-out
        </button>
      </div>
    ),
  },
  {
    id: "transition-delay",
    name: "Transition Delay",
    category: "tailwind-properties",
    description: "Utilities for controlling the delay of CSS transitions.",
    code: `delay-0 delay-75 delay-100
delay-150 delay-200 delay-300
delay-500 delay-700 delay-1000`,
    usage: "Use delay-{milliseconds} for delay",
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <button className="transition-all duration-300 delay-0 hover:scale-110 bg-purple-500 text-white px-4 py-2 rounded text-xs">
          no delay
        </button>
        <button className="transition-all duration-300 delay-150 hover:scale-110 bg-pink-500 text-white px-4 py-2 rounded text-xs">
          delay-150
        </button>
        <button className="transition-all duration-300 delay-500 hover:scale-110 bg-blue-500 text-white px-4 py-2 rounded text-xs">
          delay-500
        </button>
      </div>
    ),
  },
  {
    id: "animation",
    name: "Animation",
    category: "tailwind-properties",
    description: "Utilities for animating elements with CSS animations.",
    code: `animate-none
animate-spin
animate-ping
animate-pulse
animate-bounce`,
    usage: "Use animate-{name} for animations",
    preview: (
      <div className="grid grid-cols-4 gap-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
        <div className="animate-spin bg-purple-500 text-white p-4 rounded text-xs text-center">spin</div>
        <div className="animate-ping bg-pink-500 text-white p-4 rounded text-xs text-center">ping</div>
        <div className="animate-pulse bg-blue-500 text-white p-4 rounded text-xs text-center">pulse</div>
        <div className="animate-bounce bg-green-500 text-white p-4 rounded text-xs text-center">bounce</div>
      </div>
    ),
  },
];

export const tailwindPropertiesCategory = {
  id: "tailwind-properties",
  name: "All Properties",
  icon: "compass",
  count: tailwindProperties.length,
};
