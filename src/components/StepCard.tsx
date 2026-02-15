// Қадам карточкасы компоненті
interface StepCardProps {
  number: number;
  title: string;
  emoji?: string;
  image?: string;
  description?: string;
}

export function StepCard({ number, title, emoji, image, description }: StepCardProps) {
  return (
    <div className="card-fun flex items-start gap-4">
      <div className="step-number flex-shrink-0">{number}</div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          {image ? (
            <img src={image} alt={title} className="w-12 h-12 rounded-lg object-cover" />
          ) : (
            <span className="text-3xl">{emoji}</span>
          )}
          <h4 className="font-bold text-lg text-foreground">{title}</h4>
        </div>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
