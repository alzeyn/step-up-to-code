import { useState } from 'react';
import { StepCard } from '@/components/StepCard';
import { TaskFeedback } from '@/components/TaskFeedback';
import { completeTask } from '@/lib/progress';

// Тақырып 4: Scratch сақтау және ашу
export default function Topic4() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-bounce-slow">💾</span>
          <h1 className="section-title">Scratch сақтау және ашу</h1>
        </header>

        {/* Saving explanation */}
        <section className="card-topic border-secondary mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>💾</span> Жобаны қалай сақтаймыз?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Сенің жобаң өте маңызды! Оны сақтау керек, 
            сонда кейін қайта ашып, жалғастыра аласың.
          </p>
          
          <div className="space-y-4">
            <StepCard 
              number={1} 
              emoji="📂" 
              title="Файл мәзірін аш" 
              description="Жоғарғы сол жақта 'Файл' деген жерді бас"
            />
            <StepCard 
              number={2} 
              emoji="💾" 
              title="'Компьютерге сақтау' дегенді бас" 
              description="Немесе 'Save to your computer'"
            />
            <StepCard 
              number={3} 
              emoji="✏️" 
              title="Жобаға атау бер" 
              description="Мысалы: 'менің_мысығым' немесе 'билейтін_шар'"
            />
            <StepCard 
              number={4} 
              emoji="✅" 
              title="Сақтау түймесін бас" 
              description="Енді жобаң компьютерде сақталды!"
            />
          </div>
        </section>

        {/* Opening explanation */}
        <section className="card-topic border-accent mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>📂</span> Жобаны қалай ашамыз?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Сақталған жобаңды қайта ашу оңай!
          </p>
          
          <div className="space-y-4">
            <StepCard 
              number={1} 
              emoji="📂" 
              title="Файл мәзірін аш" 
              description="Жоғарғы сол жақта 'Файл' деген жерді бас"
            />
            <StepCard 
              number={2} 
              emoji="📁" 
              title="'Компьютерден жүктеу' дегенді бас" 
              description="Немесе 'Load from your computer'"
            />
            <StepCard 
              number={3} 
              emoji="🔍" 
              title="Жобаңды тап" 
              description="Компьютерден сақталған файлды тауып, таңда"
            />
            <StepCard 
              number={4} 
              emoji="✅" 
              title="Ашу түймесін бас" 
              description="Жобаң қайта ашылды!"
            />
          </div>
        </section>

        {/* Tasks */}
        <div className="space-y-8">
          <Task1 />
          <Task2 />
        </div>
      </div>
    </div>
  );
}

// Тапсырма 1: Сақтау қадамдарын реттеу
function Task1() {
  const correctOrder = [
    'Файл мәзірін ашу',
    'Компьютерге сақтау дегенді басу',
    'Жобаға атау беру',
    'Сақтау түймесін басу'
  ];
  const [items, setItems] = useState([
    'Сақтау түймесін басу',
    'Файл мәзірін ашу',
    'Жобаға атау беру',
    'Компьютерге сақтау дегенді басу'
  ]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
  };

  const checkAnswer = () => {
    const isCorrect = items.every((item, idx) => item === correctOrder[idx]);
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic4', 'task1');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">1</span>
        Тапсырма: Сақтау қадамдарын дұрыс реттеу
      </h3>
      <p className="text-muted-foreground mb-4">
        Жобаны сақтау қадамдарын дұрыс ретке қой!
      </p>

      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={item} className="draggable-item flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <span className="font-semibold">{item}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => moveUp(index)}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl"
              >
                ⬆️
              </button>
              <button
                onClick={() => moveDown(index)}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl"
              >
                ⬇️
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary">
        Тексеру ✓
      </button>

      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}

// Тапсырма 2: Қандай қадам жетіспейді
function Task2() {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const checkAnswer = () => {
    const isCorrect = selected === 2;
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic4', 'task2');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">2</span>
        Тапсырма: Қандай қадам жетіспейді?
      </h3>
      <p className="text-muted-foreground mb-4">
        Айбек жобаны сақтағысы келеді. Ол мына қадамдарды істеді:
      </p>

      <div className="card-fun bg-muted/50 mb-6">
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Файл мәзірін ашты</li>
          <li>???</li>
          <li>Жобаға атау берді</li>
          <li>Сақтау түймесін басты</li>
        </ol>
      </div>

      <p className="font-bold mb-4">Қандай қадам жетіспейді?</p>

      <div className="space-y-3 mb-6">
        {[
          { id: 1, text: 'Scratch-ты жапты' },
          { id: 2, text: '"Компьютерге сақтау" дегенді басты' },
          { id: 3, text: 'Компьютерді өшірді' },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selected === option.id
                ? 'border-secondary bg-secondary/10'
                : 'border-border hover:border-secondary/50'
            }`}
          >
            <span className="font-semibold">{option.text}</span>
          </button>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>
        Тексеру ✓
      </button>

      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}
