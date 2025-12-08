import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { TaskFeedback } from '@/components/TaskFeedback';
import { completeTask } from '@/lib/progress';

// Тақырып 2: Scratch программасында жоба құру
export default function Topic2() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-wiggle">🧩</span>
          <h1 className="section-title">Scratch программасында жоба құру</h1>
        </header>

        {/* What is a sprite */}
        <section className="card-topic border-highlight mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>🐱</span> Спрайт дегеніміз не?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Спрайт</strong> — бұл Scratch-тағы кейіпкер! 
            Мысық, ит, адам, машина — бәрі спрайт бола алады. 🎭
          </p>
          <p className="text-lg">
            Сен спрайтты программалайсың — ол қозғалады, сөйлейді, секіреді!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-muted rounded-2xl p-6 text-center">
              <span className="text-8xl">🐱</span>
              <p className="mt-2 font-bold">Scratch мысығы — бірінші спрайтың!</p>
            </div>
          </div>
        </section>

        {/* Basic blocks */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>🎨</span> Негізгі блоктар
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Motion blocks */}
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                🏃 Қозғалыс блоктары
              </h3>
              <p className="text-muted-foreground mb-4">
                Спрайтты қозғалтуға арналған
              </p>
              <div className="space-y-3">
                <ScratchBlock type="motion">10 қадам жүру</ScratchBlock>
                <ScratchBlock type="motion">90 градусқа бұрылу</ScratchBlock>
                <ScratchBlock type="motion">x: 0 y: 0 нүктесіне бару</ScratchBlock>
              </div>
            </div>

            {/* Looks blocks */}
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-purple-600">
                👀 Көрініс блоктары
              </h3>
              <p className="text-muted-foreground mb-4">
                Спрайттың сырт көрінісін өзгерту
              </p>
              <div className="space-y-3">
                <ScratchBlock type="looks">"Сәлем!" деп айту</ScratchBlock>
                <ScratchBlock type="looks">Костюмді ауыстыру</ScratchBlock>
                <ScratchBlock type="looks">Өлшемді 10%-ға өзгерту</ScratchBlock>
              </div>
            </div>

            {/* Events blocks */}
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-yellow-600">
                🏳️ Оқиғалар блоктары
              </h3>
              <p className="text-muted-foreground mb-4">
                Программаны бастау үшін
              </p>
              <div className="space-y-3">
                <ScratchBlock type="events">🏳️ жасыл жалауша басылғанда</ScratchBlock>
                <ScratchBlock type="events">Осы спрайт басылғанда</ScratchBlock>
                <ScratchBlock type="events">Бос орын пернесі басылғанда</ScratchBlock>
              </div>
            </div>

            {/* Control blocks */}
            <div className="card-fun">
              <h3 className="text-xl font-bold mb-4 text-orange-600">
                🔄 Басқару блоктары
              </h3>
              <p className="text-muted-foreground mb-4">
                Уақыт пен қайталау үшін
              </p>
              <div className="space-y-3">
                <ScratchBlock type="control">1 секунд күту</ScratchBlock>
                <ScratchBlock type="control">10 рет қайталау</ScratchBlock>
                <ScratchBlock type="control">Егер ... болса</ScratchBlock>
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
      </div>
    </div>
  );
}

// Тапсырма 1: Алгоритмді болжа
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
        Тапсырма: Не болады?
      </h3>
      <p className="text-muted-foreground mb-4">
        Мына блоктар орындалғанда мысық не істейді?
      </p>

      <div className="card-fun bg-muted/50 mb-6">
        <div className="space-y-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша басылғанда</ScratchBlock>
          <ScratchBlock type="motion">10 қадам жүру</ScratchBlock>
          <ScratchBlock type="looks">"Сәлем!" деп айту</ScratchBlock>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { id: 1, text: 'Мысық ұйықтайды' },
          { id: 2, text: 'Мысық жүреді және "Сәлем!" дейді' },
          { id: 3, text: 'Мысық жоғалып кетеді' },
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

// Тапсырма 2: Блокты сәйкестендір
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
        Тапсырма: Дұрыс блокты тап
      </h3>
      <p className="text-lg mb-4">
        Сен спрайтты <strong>10 қадам алға жүргізгің</strong> келеді. 
        Қай блокты пайдаланасың?
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div
          onClick={() => setSelected('looks')}
          className={`cursor-pointer transition-transform ${selected === 'looks' ? 'scale-105 ring-4 ring-primary' : ''}`}
        >
          <ScratchBlock type="looks">"Сәлем!" деп айту</ScratchBlock>
        </div>
        <div
          onClick={() => setSelected('motion')}
          className={`cursor-pointer transition-transform ${selected === 'motion' ? 'scale-105 ring-4 ring-primary' : ''}`}
        >
          <ScratchBlock type="motion">10 қадам жүру</ScratchBlock>
        </div>
        <div
          onClick={() => setSelected('control')}
          className={`cursor-pointer transition-transform ${selected === 'control' ? 'scale-105 ring-4 ring-primary' : ''}`}
        >
          <ScratchBlock type="control">1 секунд күту</ScratchBlock>
        </div>
      </div>

      <button onClick={checkAnswer} className="btn-secondary" disabled={selected === null}>
        Тексеру ✓
      </button>

      <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
    </div>
  );
}

// Тапсырма 3: Блоктарды таңда
function Task3() {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const toggleBlock = (block: string) => {
    setSelectedBlocks(prev => 
      prev.includes(block) ? prev.filter(b => b !== block) : [...prev, block]
    );
  };

  const checkAnswer = () => {
    const correctBlocks = ['events', 'motion', 'looks'];
    const isCorrect = correctBlocks.every(b => selectedBlocks.includes(b)) && 
                      selectedBlocks.length === 3;
    setFeedback(isCorrect);
    if (isCorrect && !completed) {
      completeTask('topic2', 'task3');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="step-number text-lg">3</span>
        Тапсырма: Қажетті блоктарды таңда
      </h3>
      <p className="text-lg mb-4">
        Мысық жасыл жалаушаны басқанда жүріп, "Сәлем!" деп айту керек. 
        Қажетті <strong>3 блокты</strong> таңда.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          { id: 'events', type: 'events' as const, text: '🏳️ жасыл жалауша басылғанда' },
          { id: 'motion', type: 'motion' as const, text: '10 қадам жүру' },
          { id: 'looks', type: 'looks' as const, text: '"Сәлем!" деп айту' },
          { id: 'control', type: 'control' as const, text: '10 рет қайталау' },
          { id: 'sound', type: 'sound' as const, text: 'Дыбыс ойнату' },
        ].map((block) => (
          <div
            key={block.id}
            onClick={() => toggleBlock(block.id)}
            className={`cursor-pointer transition-transform ${
              selectedBlocks.includes(block.id) ? 'scale-105 ring-4 ring-primary' : ''
            }`}
          >
            <ScratchBlock type={block.type} selected={selectedBlocks.includes(block.id)}>
              {block.text}
            </ScratchBlock>
          </div>
        ))}
      </div>

      <button onClick={checkAnswer} className="btn-secondary">
        Тексеру ✓
      </button>

      <TaskFeedback 
        isCorrect={feedback} 
        incorrectMessage="3 блок таңда: оқиға, қозғалыс және көрініс!"
        onClose={() => setFeedback(null)} 
      />
    </div>
  );
}
