import { useState } from 'react';
import { StepCard } from '@/components/StepCard';
import { TaskFeedback } from '@/components/TaskFeedback';
import { ScratchBlock } from '@/components/ScratchBlock';
import { BlockBuilder, BlockDef } from '@/components/BlockBuilder';
import { ScratchEmbed } from '@/components/ScratchEmbed';
import { completeTask } from '@/lib/progress';

// Image imports
import wakeUpImg from '@/assets/wake-up.png';
import washFaceImg from '@/assets/wash-face.png';
import breakfastImg from '@/assets/breakfast.png';
import getDressedImg from '@/assets/get-dressed.png';
import goToSchoolImg from '@/assets/go-to-school.png';
import pourWaterImg from '@/assets/pour-water.png';
import boilWaterImg from '@/assets/boil-water.png';
import teaBagImg from '@/assets/tea-bag.png';
import waitTimerImg from '@/assets/wait-timer.png';
import teaReadyImg from '@/assets/tea-ready.png';
import toothbrushImg from '@/assets/toothbrush.png';
import toothpasteImg from '@/assets/toothpaste.png';
import sleepingImg from '@/assets/sleeping.png';
import brushTeethImg from '@/assets/brush-teeth.png';
import rinseMouthImg from '@/assets/rinse-mouth.png';
import girlTeaImg from '@/assets/girl-tea.png';
import drinkTeaImg from '@/assets/drink-tea.png';
import scratchCatImg from '@/assets/scratch-cat.png';
import catHelloImg from '@/assets/cat-hello.png';

const task4Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша басылғанда' },
  { id: 'move1', type: 'motion', label: '🚶 10 қадам жүру' },
  { id: 'say', type: 'looks', label: '💬 "Сәлем!" деп айту' },
  { id: 'wait', type: 'control', label: '⏳ 2 секунд күту' },
  { id: 'move2', type: 'motion', label: '🚶 10 қадам жүру' },
];

// Тақырып 1: Менің алғашқы программам
export default function Topic1() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <img src={scratchCatImg} alt="Программа" className="w-20 h-20 mx-auto mb-4 animate-bounce-slow" />
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
            <img src={wakeUpImg} alt="Бірінші қадам" className="w-10 h-10 rounded-lg" />
            <span>Бірінші қадам</span>
            <span className="text-2xl">➡️</span>
            <img src={washFaceImg} alt="Екінші қадам" className="w-10 h-10 rounded-lg" />
            <span>Екінші қадам</span>
            <span className="text-2xl">➡️</span>
            <img src={breakfastImg} alt="Үшінші қадам" className="w-10 h-10 rounded-lg" />
            <span>Үшінші қадам ✅</span>
          </div>
        </section>

        {/* Example 1: Morning routine */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <img src={wakeUpImg} alt="Таңертең" className="w-10 h-10 rounded-lg" />
            Мысал: Таңертең мектепке жиналу
            <img src={goToSchoolImg} alt="Мектеп" className="w-10 h-10 rounded-lg" />
          </h3>
          <div className="space-y-4">
            <StepCard number={1} image={wakeUpImg} title="Оян" description="Будильник сөнді, көзіңді аш!" />
            <StepCard number={2} image={washFaceImg} title="Бетіңді жу" description="Суық сумен бетіңді жу." />
            <StepCard number={3} image={breakfastImg} title="Таңғы ас іш" description="Ботқа немесе нан же." />
            <StepCard number={4} image={getDressedImg} title="Киін" description="Мектеп формасын ки." />
            <StepCard number={5} image={goToSchoolImg} title="Мектепке бар" description="Портфелді ал және шық!" />
          </div>
        </section>

        {/* Example 2: Making tea */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <img src={teaReadyImg} alt="Шай" className="w-10 h-10 rounded-lg" />
            Мысал: Шай дайындау
            <img src={pourWaterImg} alt="Шәйнек" className="w-10 h-10 rounded-lg" />
          </h3>
          <div className="space-y-4">
            <StepCard number={1} image={pourWaterImg} title="Шәйнекке су құй" />
            <StepCard number={2} image={boilWaterImg} title="Суды қайнат" />
            <StepCard number={3} image={teaBagImg} title="Шай пакетін сал" />
            <StepCard number={4} image={waitTimerImg} title="2 минут күт" />
            <StepCard number={5} image={teaReadyImg} title="Шай дайын!" />
          </div>
        </section>

        {/* Tasks */}
        <div className="space-y-8">
          <Task1 />
          <Task2 />
          <Task3 />
          <Task4 />
        </div>

        {/* Scratch Editor */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            🐱 Scratch редакторы
          </h2>
          <p className="text-muted-foreground mb-4">
            Блоктарды жинағаннан кейін, Scratch-та программалап көр!
          </p>
          <ScratchEmbed />
        </div>
      </div>
    </div>
  );
}

// Image map for tasks
const morningImages: Record<string, string> = {
  'Оян': wakeUpImg,
  'Бетіңді жу': washFaceImg,
  'Таңғы ас іш': breakfastImg,
  'Киін': getDressedImg,
  'Мектепке бар': goToSchoolImg,
};

// Тапсырма 1: Қадамдарды дұрыс ретке қой
function Task1() {
  const correctOrder = ['Оян', 'Бетіңді жу', 'Таңғы ас іш', 'Киін', 'Мектепке бар'];
  const [items, setItems] = useState([
    { text: 'Киін' },
    { text: 'Оян' },
    { text: 'Мектепке бар' },
    { text: 'Таңғы ас іш' },
    { text: 'Бетіңді жу' },
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
        <img src={wakeUpImg} alt="Таңертең" className="w-8 h-8 rounded-lg" />
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
              <img src={morningImages[item.text]} alt={item.text} className="w-10 h-10 rounded-lg object-cover" />
              <span className="font-semibold">{item.text}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => moveUp(index)} className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl" aria-label="Жоғары">⬆️</button>
              <button onClick={() => moveDown(index)} className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-xl" aria-label="Төмен">⬇️</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={checkAnswer} className="btn-secondary">✅ Тексеру</button>
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
        <img src={girlTeaImg} alt="Айгерім шай дайындайды" className="w-24 h-24 mx-auto mb-3 rounded-xl" />
        <p className="text-lg text-center"><strong>Әңгіме:</strong> Айгерім шай дайындағысы келеді.</p>
        <div className="flex items-center justify-center gap-2 my-3">
          <img src={pourWaterImg} alt="Су құю" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl">➡️</span>
          <img src={boilWaterImg} alt="Қайнату" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl">➡️</span>
          <span className="text-3xl">❓</span>
        </div>
        <p className="text-lg text-center">Ол шәйнекке су құйды және суды қайнатты.<br /><strong>Келесі не істеу керек?</strong></p>
      </div>
      <div className="space-y-3 mb-6">
        {[
          { id: 1, text: 'Шайды іш', image: drinkTeaImg },
          { id: 2, text: 'Шай пакетін сал', image: teaBagImg },
          { id: 3, text: 'Суды құй', image: pourWaterImg },
        ].map((option) => (
          <button key={option.id} onClick={() => setSelected(option.id)} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${selected === option.id ? 'border-secondary bg-secondary/10' : 'border-border hover:border-secondary/50'}`}>
            <img src={option.image} alt={option.text} className="w-12 h-12 rounded-lg object-cover" />
            <span className="font-semibold text-lg">{option.text}</span>
          </button>
        ))}
      </div>
      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>✅ Тексеру</button>
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
    { id: 1, text: 'Тіс щеткасын ал', image: toothbrushImg },
    { id: 2, text: 'Тіс пастасын жақ', image: toothpasteImg },
    { id: 3, text: 'Ұйықтап кет', image: sleepingImg },
    { id: 4, text: 'Тісіңді жу', image: brushTeethImg },
    { id: 5, text: 'Аузыңды шай', image: rinseMouthImg },
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
        <img src={brushTeethImg} alt="Тіс тазалау" className="w-10 h-10 rounded-lg" />
        <p className="text-muted-foreground">Төменде тіс тазалау алгоритмі берілген. Бірақ бір қадам қате! ❌ Қате қадамды тап!</p>
      </div>
      <div className="space-y-3 mb-6">
        {steps.map((step) => (
          <button key={step.id} onClick={() => setSelected(step.id)} className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-3 ${selected === step.id ? 'border-destructive bg-destructive/10' : 'border-border hover:border-muted-foreground'}`}>
            <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">{step.id}</span>
            <img src={step.image} alt={step.text} className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-semibold">{step.text}</span>
          </button>
        ))}
      </div>
      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>✅ Тексеру</button>
      <TaskFeedback isCorrect={feedback} correctMessage="🎉 Жарайсың! 'Ұйықтап кет' — бұл қате қадам! 😄" onClose={() => setFeedback(null)} />
    </div>
  );
}

// Тапсырма 4: Scratch-та сызықтық алгоритм
function Task4() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">4</span>
        <img src={scratchCatImg} alt="Scratch мысығы" className="w-8 h-8 rounded-lg" />
        Тапсырма: Scratch-та алгоритм құр
      </h3>
      
      <div className="card-fun bg-gradient-to-br from-secondary/10 to-accent/10 mb-6">
        <img src={catHelloImg} alt="Мысық сәлем" className="w-24 h-24 mx-auto mb-3 rounded-xl" />
        <p className="text-lg mb-4 text-center">
          <strong>Тапсырма:</strong> Блоктарды дұрыс ретке қой:
        </p>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <img src={scratchCatImg} alt="Жалауша" className="w-8 h-8 rounded-lg" />
            <span>Жасыл жалауша басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <img src={scratchCatImg} alt="Жүру" className="w-8 h-8 rounded-lg" />
            <span>Мысық 10 қадам жүрсін</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span>
            <img src={catHelloImg} alt="Сөйлеу" className="w-8 h-8 rounded-lg" />
            <span>Мысық "Сәлем!" деп айтсын</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span>
            <img src={waitTimerImg} alt="Күту" className="w-8 h-8 rounded-lg" />
            <span>2 секунд күтсін</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">5️⃣</span>
            <img src={scratchCatImg} alt="Жүру" className="w-8 h-8 rounded-lg" />
            <span>Тағы 10 қадам жүрсін</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={task4Blocks}
          correctOrder={['flag', 'move1', 'say', 'wait', 'move2']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic1', 'task4');
              setCompleted(true);
            }
          }}
        />
      </div>

      {completed && (
        <div className="feedback-correct animate-pop">✅ Орындалды! ⭐</div>
      )}
    </div>
  );
}
