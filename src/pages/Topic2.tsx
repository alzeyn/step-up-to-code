import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { BlockBuilder, BlockDef } from '@/components/BlockBuilder';
import { ScratchEmbed } from '@/components/ScratchEmbed';
import { TaskFeedback } from '@/components/TaskFeedback';
import { completeTask } from '@/lib/progress';

import scratchCatImg from '@/assets/scratch-cat.png';
import catHelloImg from '@/assets/cat-hello.png';
import catDanceImg from '@/assets/cat-dance.png';
import greenFlagImg from '@/assets/green-flag.png';
import waitTimerImg from '@/assets/wait-timer.png';

// Тақырып 2: Scratch программасында жоба құру
export default function Topic2() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <img src={scratchCatImg} alt="Scratch" className="w-20 h-20 mx-auto mb-4 animate-wiggle" />
          <h1 className="section-title">🎨 Scratch программасында жоба құру 🎨</h1>
        </header>

        {/* What is a sprite */}
        <section className="card-topic border-highlight mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <img src={scratchCatImg} alt="Мысық" className="w-10 h-10 rounded-lg" />
            Спрайт дегеніміз не?
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={scratchCatImg} alt="Мысық" className="w-14 h-14 rounded-lg" />
            <img src={catDanceImg} alt="Билейтін мысық" className="w-14 h-14 rounded-lg" />
            <img src={catHelloImg} alt="Сәлем мысық" className="w-14 h-14 rounded-lg" />
          </div>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Спрайт</strong> — бұл Scratch-тағы кейіпкер! 
            Мысық, ит, адам, машина — бәрі спрайт бола алады!
          </p>
          <p className="text-lg flex items-center gap-2">
            ✨ Сен спрайтты программалайсың — ол қозғалады, сөйлейді, секіреді!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-muted rounded-2xl p-6 text-center">
              <img src={scratchCatImg} alt="Scratch мысығы" className="w-24 h-24 mx-auto" />
              <p className="mt-2 font-bold text-lg">👆 Scratch мысығы — бірінші спрайтың! 👆</p>
            </div>
          </div>
        </section>

        {/* Basic blocks */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            🎨 Негізгі блоктар 🧱
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-2">
                <img src={scratchCatImg} alt="Қозғалыс" className="w-8 h-8 rounded-lg" />
                Қозғалыс блоктары
              </h3>
              <p className="text-muted-foreground mb-4 flex items-center gap-2">Спрайтты қозғалтуға арналған ➡️</p>
              <div className="space-y-3">
                <ScratchBlock type="motion">🚶 10 қадам жүру</ScratchBlock>
                <ScratchBlock type="motion">↩️ 90 градусқа бұрылу</ScratchBlock>
                <ScratchBlock type="motion">📍 x: 0 y: 0 нүктесіне бару</ScratchBlock>
              </div>
            </div>
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                <img src={catHelloImg} alt="Көрініс" className="w-8 h-8 rounded-lg" />
                Көрініс блоктары
              </h3>
              <p className="text-muted-foreground mb-4 flex items-center gap-2">Спрайттың сырт көрінісін өзгерту 🎨</p>
              <div className="space-y-3">
                <ScratchBlock type="looks">💬 "Сәлем!" деп айту</ScratchBlock>
                <ScratchBlock type="looks">👗 Костюмді ауыстыру</ScratchBlock>
                <ScratchBlock type="looks">📏 Өлшемді 10%-ға өзгерту</ScratchBlock>
              </div>
            </div>
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-yellow-600 flex items-center gap-2">
                <img src={greenFlagImg} alt="Оқиғалар" className="w-8 h-8 rounded-lg" />
                Оқиғалар блоктары
              </h3>
              <p className="text-muted-foreground mb-4 flex items-center gap-2">Программаны бастау үшін 🚦</p>
              <div className="space-y-3">
                <ScratchBlock type="events">🏳️ жасыл жалауша басылғанда</ScratchBlock>
                <ScratchBlock type="events">👆 Осы спрайт басылғанда</ScratchBlock>
                <ScratchBlock type="events">⌨️ Бос орын пернесі басылғанда</ScratchBlock>
              </div>
            </div>
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-orange-600 flex items-center gap-2">
                <img src={waitTimerImg} alt="Басқару" className="w-8 h-8 rounded-lg" />
                Басқару блоктары
              </h3>
              <p className="text-muted-foreground mb-4 flex items-center gap-2">Уақыт пен қайталау үшін ⏱️</p>
              <div className="space-y-3">
                <ScratchBlock type="control">⏳ 1 секунд күту</ScratchBlock>
                <ScratchBlock type="control">🔄 10 рет қайталау</ScratchBlock>
                <ScratchBlock type="control">❓ Егер ... болса</ScratchBlock>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks */}
        <div className="space-y-8">
          <Task1 />
          <Task2 />
          <Task3 />
        </div>

        {/* Scratch Editor */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">🐱 Scratch редакторы</h2>
          <p className="text-muted-foreground mb-4">Блоктарды жинағаннан кейін, Scratch-та программалап көр!</p>
          <ScratchEmbed />
        </div>
      </div>
    </div>
  );
}

// Task 1: Predict the algorithm
function Task1() {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const checkAnswer = () => {
    const isCorrect = selected === 2;
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic2', 'task1');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">1</span>
        🤔 Тапсырма: Не болады? 🤔
      </h3>
      <p className="text-muted-foreground mb-4 flex items-center gap-2">
        <img src={scratchCatImg} alt="Мысық" className="w-8 h-8 rounded-lg" />
        Мына блоктар орындалғанда мысық не істейді? ❓
      </p>
      <div className="card-fun bg-muted/50 mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src={greenFlagImg} alt="Жалауша" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl">➡️</span>
          <img src={scratchCatImg} alt="Жүру" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl">➡️</span>
          <img src={catHelloImg} alt="Сәлем" className="w-10 h-10 rounded-lg" />
        </div>
        <div className="space-y-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша басылғанда</ScratchBlock>
          <ScratchBlock type="motion">🚶 10 қадам жүру</ScratchBlock>
          <ScratchBlock type="looks">💬 "Сәлем!" деп айту</ScratchBlock>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {[
          { id: 1, text: 'Мысық ұйықтайды', image: scratchCatImg },
          { id: 2, text: 'Мысық жүреді және "Сәлем!" дейді', image: catHelloImg },
          { id: 3, text: 'Мысық жоғалып кетеді', image: scratchCatImg },
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

// Task 2: Match the block
function Task2() {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const checkAnswer = () => {
    const isCorrect = selected === 'motion';
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic2', 'task2');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">2</span>
        🔍 Тапсырма: Дұрыс блокты тап 🔍
      </h3>
      <div className="flex items-center gap-3 mb-4">
        <img src={scratchCatImg} alt="Мысық жүреді" className="w-12 h-12 rounded-lg" />
        <p className="text-lg">Сен спрайтты <strong>10 қадам алға жүргізгің</strong> келеді. Қай блокты пайдаланасың?</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div onClick={() => setSelected('looks')} className={`cursor-pointer transition-transform ${selected === 'looks' ? 'scale-105 ring-4 ring-primary' : ''}`}>
          <ScratchBlock type="looks">💬 "Сәлем!" деп айту</ScratchBlock>
        </div>
        <div onClick={() => setSelected('motion')} className={`cursor-pointer transition-transform ${selected === 'motion' ? 'scale-105 ring-4 ring-primary' : ''}`}>
          <ScratchBlock type="motion">🚶 10 қадам жүру</ScratchBlock>
        </div>
        <div onClick={() => setSelected('control')} className={`cursor-pointer transition-transform ${selected === 'control' ? 'scale-105 ring-4 ring-primary' : ''}`}>
          <ScratchBlock type="control">⏳ 1 секунд күту</ScratchBlock>
        </div>
      </div>
      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>✅ Тексеру</button>
      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}

// Task 3: Select required blocks (now with BlockBuilder)
const task3Blocks: BlockDef[] = [
  { id: 'events', type: 'events', label: '🏳️ жасыл жалауша басылғанда' },
  { id: 'motion', type: 'motion', label: '🚶 10 қадам жүру' },
  { id: 'looks', type: 'looks', label: '💬 "Сәлем!" деп айту' },
  { id: 'control', type: 'control', label: '🔄 10 рет қайталау' },
  { id: 'sound', type: 'sound', label: '🔊 Дыбыс ойнату' },
];

function Task3() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">3</span>
        🧩 Тапсырма: Блоктарды дұрыс ретке қой 🧩
      </h3>
      <div className="flex items-center gap-3 mb-4">
        <img src={catHelloImg} alt="Мысық" className="w-12 h-12 rounded-lg" />
        <p className="text-lg">
          Мысық жасыл жалаушаны басқанда жүріп, "Сәлем!" деп айту керек. 
          Блоктарды дұрыс ретпен жина!
        </p>
      </div>

      <BlockBuilder
        availableBlocks={task3Blocks}
        correctOrder={['events', 'motion', 'looks']}
        onComplete={() => {
          if (!completed) {
            completeTask('topic2', 'task3');
            setCompleted(true);
          }
        }}
      />

      {completed && (
        <div className="feedback-correct animate-pop mt-4">✅ Дұрыс! Жарайсың! ⭐</div>
      )}
    </div>
  );
}
