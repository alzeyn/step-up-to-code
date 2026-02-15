import { useState, useCallback } from 'react';

export interface BlockDef {
  id: string;
  type: 'motion' | 'looks' | 'events' | 'control' | 'sound';
  label: string;
}

interface BlockBuilderProps {
  availableBlocks: BlockDef[];
  correctOrder: string[]; // array of block ids in correct order
  onComplete?: () => void;
}

const typeStyles: Record<string, string> = {
  motion: 'bg-blue-500 border-blue-700 text-white',
  looks: 'bg-purple-500 border-purple-700 text-white',
  events: 'bg-yellow-500 border-yellow-600 text-yellow-900',
  control: 'bg-orange-500 border-orange-700 text-white',
  sound: 'bg-pink-500 border-pink-700 text-white',
};

const typeNotchColor: Record<string, string> = {
  motion: 'bg-blue-600',
  looks: 'bg-purple-600',
  events: 'bg-yellow-600',
  control: 'bg-orange-600',
  sound: 'bg-pink-600',
};

function ScratchBlockShape({ block, onRemove, isWorkspace }: { block: BlockDef; onRemove?: () => void; isWorkspace?: boolean }) {
  return (
    <div className="relative group">
      {/* Top notch (not for first/events block) */}
      {isWorkspace && block.type !== 'events' && (
        <div className={`absolute -top-1 left-6 w-5 h-2 rounded-t-md ${typeNotchColor[block.type]}`} />
      )}
      <div
        className={`relative rounded-lg px-5 py-3 font-bold text-lg shadow-md border-b-4 
          ${typeStyles[block.type]} select-none
          ${isWorkspace ? '' : 'cursor-grab active:cursor-grabbing hover:scale-105 transition-transform'}`}
        draggable={!isWorkspace}
        onDragStart={(e) => {
          e.dataTransfer.setData('blockId', block.id);
          e.dataTransfer.effectAllowed = 'copy';
        }}
      >
        {/* Left bump */}
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2.5 h-6 rounded-l-full ${typeNotchColor[block.type]}`} />
        
        <span className="relative z-10">{block.label}</span>
        
        {isWorkspace && onRemove && (
          <button
            onClick={onRemove}
            className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-destructive text-destructive-foreground 
              text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            ✕
          </button>
        )}
      </div>
      {/* Bottom notch */}
      {isWorkspace && (
        <div className={`absolute -bottom-1 left-6 w-5 h-2 rounded-b-md ${typeNotchColor[block.type]}`} />
      )}
    </div>
  );
}

export function BlockBuilder({ availableBlocks, correctOrder, onComplete }: BlockBuilderProps) {
  const [workspace, setWorkspace] = useState<BlockDef[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData('blockId');
    const block = availableBlocks.find(b => b.id === blockId);
    if (block) {
      setWorkspace(prev => [...prev, { ...block }]);
      setFeedback(null);
    }
  }, [availableBlocks]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const removeBlock = (index: number) => {
    setWorkspace(prev => prev.filter((_, i) => i !== index));
    setFeedback(null);
  };

  const checkAnswer = () => {
    const currentIds = workspace.map(b => b.id);
    const isCorrect = correctOrder.length === currentIds.length &&
      correctOrder.every((id, i) => id === currentIds[i]);
    
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  };

  const clearWorkspace = () => {
    setWorkspace([]);
    setFeedback(null);
  };

  return (
    <div className="rounded-2xl border-4 border-border bg-card shadow-card overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-blue-500 text-secondary-foreground px-4 py-3 font-bold text-lg flex items-center gap-2">
        <span>🧩</span> Блоктарды жина!
        <span className="text-sm font-normal ml-auto">Блоктарды сүйреп, жұмыс алаңына сал ➡️</span>
      </div>

      <div className="flex flex-col md:flex-row min-h-[300px]">
        {/* Available blocks palette */}
        <div className="md:w-1/3 p-4 bg-muted/50 border-r-2 border-border">
          <p className="font-bold mb-3 text-sm text-muted-foreground">📦 Қол жетімді блоктар:</p>
          <div className="space-y-3">
            {availableBlocks.map((block) => (
              <ScratchBlockShape key={block.id} block={block} />
            ))}
          </div>
        </div>

        {/* Workspace */}
        <div className="md:w-2/3 p-4 flex flex-col">
          <p className="font-bold mb-3 text-sm text-muted-foreground">🏗️ Жұмыс алаңы:</p>
          
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={`flex-1 min-h-[200px] rounded-xl border-2 border-dashed p-4 transition-colors
              ${workspace.length === 0 
                ? 'border-muted-foreground/30 bg-muted/20 flex items-center justify-center' 
                : 'border-secondary bg-secondary/5'}`}
          >
            {workspace.length === 0 ? (
              <p className="text-muted-foreground text-center text-lg">
                ⬇️ Блоктарды осында сүйреп әкел! ⬇️
              </p>
            ) : (
              <div className="space-y-1">
                {workspace.map((block, index) => (
                  <ScratchBlockShape
                    key={`${block.id}-${index}`}
                    block={block}
                    isWorkspace
                    onRemove={() => removeBlock(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-4">
            <button onClick={checkAnswer} className="btn-secondary" disabled={workspace.length === 0}>
              ✅ Тексеру
            </button>
            <button onClick={clearWorkspace} className="px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 font-semibold transition-colors">
              🗑️ Тазалау
            </button>
          </div>

          {/* Feedback */}
          {feedback === 'correct' && (
            <div className="feedback-correct mt-4 animate-pop">
              🎉 Жарайсың! Блоктар дұрыс жиналды! ⭐
            </div>
          )}
          {feedback === 'incorrect' && (
            <div className="feedback-incorrect mt-4 animate-pop">
              🤔 Қайтадан көр! Блоктардың ретін тексер.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
