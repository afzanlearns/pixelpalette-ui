import { useState, memo } from "react";
import { Check, Copy } from "lucide-react";


const ComponentCard = memo(({
  name,
  description,
  code,
  usage,
  preview,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <article className="card-hover bg-card border border-border rounded-lg overflow-hidden">
      {/* Card Header */}
      <div className="p-6 bg-surface-elevated border-b border-border">
        <h3 className="text-xl font-heading font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {name}
        </h3>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      {/* Live Preview */}
      <div className="p-6 border-b border-border">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Live Preview
        </span>
        <div className="mt-4 p-6 bg-surface-inset rounded-lg border border-border min-h-[80px] flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-muted/30">
          {preview}
        </div>
      </div>

      {/* Code Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Tailwind Code
          </span>
          <button
            onClick={handleCopy}
            className="
              flex items-center gap-2 px-3 py-1.5 rounded-md
              text-sm font-medium transition-all duration-200
              hover:bg-muted text-muted-foreground hover:text-foreground
              hover:scale-105 active:scale-95
            "
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-success animate-in zoom-in duration-200" />
                <span className="text-success">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <div className="relative group">
          <pre className="p-4 bg-surface-inset rounded-lg border border-border overflow-x-auto scrollbar-thin transition-all duration-300 hover:border-primary/30">
            <code className="text-sm font-mono text-code-text whitespace-pre">
              {code}
            </code>
          </pre>
        </div>
      </div>

      {/* Usage Context */}
      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Use for:
        </span>
        <p className="mt-2 text-sm text-muted-foreground">{usage}</p>
      </div>
    </article>
  );
});

ComponentCard.displayName = 'ComponentCard';

export default ComponentCard;
