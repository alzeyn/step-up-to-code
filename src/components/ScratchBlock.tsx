// Scratch блогын көрсету компоненті
interface ScratchBlockProps {
  type: 'motion' | 'looks' | 'events' | 'control' | 'sound';
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
}

const blockStyles = {
  motion: 'block-motion',
  looks: 'block-looks',
  events: 'block-events',
  control: 'block-control',
  sound: 'block-sound',
};

export function ScratchBlock({ type, children, onClick, selected }: ScratchBlockProps) {
  return (
    <div
      onClick={onClick}
      className={`scratch-block ${blockStyles[type]} ${
        selected ? 'ring-4 ring-primary scale-105' : ''
      } ${onClick ? 'cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
}
