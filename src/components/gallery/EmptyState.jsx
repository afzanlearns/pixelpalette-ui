
const EmptyState = ({ searchQuery }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl mb-4">🔍</span>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        No components found
      </h3>
      <p className="text-muted-foreground max-w-md">
        No components match "{searchQuery}". Try a different search term or
        browse by category.
      </p>
    </div>
  );
};

export default EmptyState;
