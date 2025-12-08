import { useEffect } from 'react';

// Тапсырма нәтижесін көрсету компоненті
interface TaskFeedbackProps {
  isCorrect: boolean | null;
  correctMessage?: string;
  incorrectMessage?: string;
  onClose?: () => void;
}

export function TaskFeedback({ 
  isCorrect, 
  correctMessage = "Жарайсың! Дұрыс жауап! 🎉",
  incorrectMessage = "Қайталап көр! Сен істей аласың! 💪",
  onClose 
}: TaskFeedbackProps) {
  useEffect(() => {
    if (isCorrect !== null && onClose) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCorrect, onClose]);

  if (isCorrect === null) return null;

  return (
    <div className={`animate-pop mt-4 ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
      <div className="flex items-center gap-3">
        <span className="text-3xl">{isCorrect ? '✅' : '🔄'}</span>
        <p>{isCorrect ? correctMessage : incorrectMessage}</p>
      </div>
    </div>
  );
}
