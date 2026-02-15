// Scratch редакторын iframe арқылы ендіру компоненті
interface ScratchEmbedProps {
  className?: string;
}

export function ScratchEmbed({ className = '' }: ScratchEmbedProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border-4 border-secondary shadow-card ${className}`}>
      <div className="bg-secondary text-secondary-foreground px-4 py-2 font-bold text-lg flex items-center gap-2">
        <span>🐱</span> Scratch редакторы
      </div>
      <iframe
        src="https://scratch.mit.edu/projects/editor/?tutorial=getStarted"
        width="100%"
        height="500"
        allowFullScreen
        className="border-0"
        title="Scratch Editor"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
