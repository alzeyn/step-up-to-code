import { useState } from 'react';
import { StepCard } from '@/components/StepCard';
import { TaskFeedback } from '@/components/TaskFeedback';
import { ScratchBlock } from '@/components/ScratchBlock';
import { completeTask } from '@/lib/progress';

// Тақырып 1: Менің алғашқы программам (сызықтық алгоритм)
export default function Topic1() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-bounce-slow">📝</span>
          <h1 className="section-title">✨ Менің алғашқы программам ✨</h1>
          <p className="text-xl text-muted-foreground">📋 Сызықтық алгоритм 📋</p>
        </header>

        {/* Explanation */}
        <section className="card-topic border-secondary mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>🤔</span> Сызықтық алгоритм дегеніміз не? <span>🤔</span>
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">1️⃣➡️2️⃣➡️3️⃣</span>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Сызықтық алгоритм</strong> — бұл қадамдарды 
            <strong> бірінен соң бірі</strong> орындау! 
          </p>
          <div className="flex items-center gap-2 text-lg">
            <span className="text-3xl">👣</span>
            <span>Бірінші қадам</span>
            <span className="text-2xl">➡️</span>
            <span>Екінші қадам</span>
            <span className="text-2xl">➡️</span>
            <span>Үшінші қадам</span>
            <span className="text-3xl">✅</span>
          </div>
        </section>

        {/* Example 1: Morning routine */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>🌅</span> Мысал: Таңертең мектепке жиналу <span>🏫</span>
          </h3>
          <div className="space-y-4">
            <StepCard number={1} emoji="⏰😴" title="Оян" description="Будильник сөнді, көзіңді аш!" />
            <StepCard number={2} emoji="🚿💦" title="Бетіңді жу" description="Суық сумен бетіңді жу." />
            <StepCard number={3} emoji="🥣🍞" title="Таңғы ас іш" description="Ботқа немесе нан же." />
            <StepCard number={4} emoji="👕👖" title="Киін" description="Мектеп формасын ки." />
            <StepCard number={5} emoji="🎒🚶" title="Мектепке бар" description="Портфелді ал және шық!" />
          </div>
        </section>

        {/* Example 2: Making tea */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>🍵</span> Мысал: Шай дайындау <span>☕</span>
          </h3>
          <div className="space-y-4">
            <StepCard number={1} emoji="🫖💧" title="Шәйнекке су құй" />
            <StepCard number={2} emoji="🔥♨️" title="Суды қайнат" />
            <StepCard number={3} emoji="🫖🍃" title="Шай пакетін сал" />
            <StepCard number={4} emoji="⏳⏱️" title="2 минут күт" />
            <StepCard number={5} emoji="🍵✅" title="Шай дайын!" />
          </div>
        </section>

        {/* Tasks */}
        <div className="space-y-8">
          <Task1 />
          <Task2 />
          <Task3 />
          <Task4 />
        </div>
      </div>
    </div>
  );
}

// Тапсырма 1: Қадамдарды дұрыс ретке қой
function Task1() {
  const steps = [
    { text: 'Оян', emoji: '⏰😴' },
    { text: 'Бетіңді жу', emoji: '🚿💦' },
    { text: 'Таңғы ас іш', emoji: '🥣🍞' },
    { text: 'Киін', emoji: '👕👖' },
    { text: 'Мектепке бар', emoji: '🎒🚶' },
  ];
  const correctOrder = ['Оян', 'Бетіңді жу', 'Таңғы ас іш', 'Киін', 'Мектепке бар'];
  const [items, setItems] = useState([
    { text: 'Киін', emoji: '👕👖' },
    { text: 'Оян', emoji: '⏰😴' },
    { text: 'Мектепке бар', emoji: '🎒🚶' },
    { text: 'Таңғы ас іш', emoji: '🥣🍞' },
    { text: 'Бетіңді жу', emoji: '🚿💦' },
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
    const isCorrect = items.every((item, idx) => item.text === correctOrder[idx]);
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic1', 'task1');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">1</span>
        🔢 Тапсырма: Қадамдарды дұрыс ретке қой 🔢
      </h3>
      <p className="text-muted-foreground mb-4 flex items-center gap-2">
        <span className="text-xl">🌅</span>
        Таңертең мектепке қалай жиналасың? Қадамдарды дұрыс ретке қой!
        <span className="text-xl">⬆️⬇️</span>
      </p>

      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={item.text} className="draggable-item flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-semibold">{item.text}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => moveUp(index)}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl"
                aria-label="Жоғары"
              >
                ⬆️
              </button>
              <button
                onClick={() => moveDown(index)}
                className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl"
                aria-label="Төмен"
              >
                ⬇️
              </button>
            </div>
          </div>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary">
        ✅ Тексеру
      </button>

      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}

// Тапсырма 2: Келесі қадамды таңда
function Task2() {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const checkAnswer = () => {
    const isCorrect = selected === 2;
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic1', 'task2');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">2</span>
        ❓ Тапсырма: Келесі қадамды таңда ❓
      </h3>
      
      <div className="card-fun bg-muted/50 mb-6">
        <div className="text-5xl mb-3 text-center">👧🍵</div>
        <p className="text-lg text-center">
          <strong>Әңгіме:</strong> Айгерім шай дайындағысы келеді.
        </p>
        <div className="flex items-center justify-center gap-2 my-3 text-2xl">
          <span>🫖💧</span>
          <span>➡️</span>
          <span>🔥♨️</span>
          <span>➡️</span>
          <span className="text-3xl">❓</span>
        </div>
        <p className="text-lg text-center">
          Ол шәйнекке су құйды және суды қайнатты. 
          <br />
          <strong>Келесі не істеу керек?</strong>
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { id: 1, text: 'Шайды іш', emoji: '🍵😋' },
          { id: 2, text: 'Шай пакетін сал', emoji: '🫖🍃' },
          { id: 3, text: 'Суды құй', emoji: '💧🫖' },
        ].map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
              selected === option.id
                ? 'border-secondary bg-secondary/10'
                : 'border-border hover:border-secondary/50'
            }`}
          >
            <span className="text-3xl">{option.emoji}</span>
            <span className="font-semibold text-lg">{option.text}</span>
          </button>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>
        ✅ Тексеру
      </button>

      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}

// Тапсырма 3: Қатені тап
function Task3() {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const steps = [
    { id: 1, text: 'Тіс щеткасын ал', emoji: '🪥✋', correct: false },
    { id: 2, text: 'Тіс пастасын жақ', emoji: '🪥🦷', correct: false },
    { id: 3, text: 'Ұйықтап кет', emoji: '😴💤', correct: true }, // Wrong step!
    { id: 4, text: 'Тісіңді жу', emoji: '🦷✨', correct: false },
    { id: 5, text: 'Аузыңды шай', emoji: '💧👄', correct: false },
  ];

  const checkAnswer = () => {
    const isCorrect = selected === 3;
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic1', 'task3');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">3</span>
        🔍 Тапсырма: Қатені тап 🔍
      </h3>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl">🦷🪥</span>
        <p className="text-muted-foreground">
          Төменде тіс тазалау алгоритмі берілген. Бірақ бір қадам қате! 
          <span className="text-xl">❌</span> Қате қадамды тап!
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setSelected(step.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${
              selected === step.id
                ? 'border-destructive bg-destructive/10'
                : 'border-border hover:border-muted-foreground'
            }`}
          >
            <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
              {step.id}
            </span>
            <span className="text-2xl">{step.emoji}</span>
            <span className="font-semibold">{step.text}</span>
          </button>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>
        ✅ Тексеру
      </button>

      <TaskFeedback 
        isCorrect={feedback} 
        correctMessage="🎉 Жарайсың! '😴 Ұйықтап кет' — бұл қате қадам! 😄"
        onClose={() => setFeedback(null)} 
      />
    </div>
  );
}

// Тапсырма 4: Scratch-та сызықтық алгоритм
function Task4() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic1', 'task4');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">4</span>
        🐱 Тапсырма: Scratch-та алгоритм құр 🐱
      </h3>
      
      <div className="card-fun bg-gradient-to-br from-secondary/10 to-accent/10 mb-6">
        <div className="text-5xl mb-3 text-center">🐱💻</div>
        <p className="text-lg mb-4 text-center">
          <strong>Тапсырма:</strong> Scratch программасын аш және мысық спрайтын программала:
        </p>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <span className="text-xl">🐱🚶</span>
            <span>Мысық 10 қадам алға жүрсін</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <span className="text-xl">🐱💬</span>
            <span>Мысық "Сәлем!" деп айтсын</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span>
            <span className="text-xl">⏳</span>
            <span>2 секунд күтсін</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span>
            <span className="text-xl">🐱🚶</span>
            <span>Мысық тағы 10 қадам жүрсін</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-bold mb-3 flex items-center gap-2">
          <span className="text-xl">🧩</span>
          Қажетті блоктар:
        </p>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша басылғанда</ScratchBlock>
          <ScratchBlock type="motion">🚶 10 қадам жүру</ScratchBlock>
          <ScratchBlock type="looks">💬 "Сәлем!" деп айту</ScratchBlock>
          <ScratchBlock type="control">⏳ 2 секунд күту</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={`${completed ? 'btn-accent' : 'btn-secondary'}`}
      >
        {completed ? '✅ Орындалды!' : '👍 Орындадым'}
      </button>
    </div>
  );
}
