import { useState } from 'react';
import { TaskFeedback } from '@/components/TaskFeedback';
import { ScratchBlock } from '@/components/ScratchBlock';
import { recordGame } from '@/lib/progress';

// Ойындар беті
export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    { id: 'ordering', emoji: '📋', title: 'Алгоритм реттеу', desc: 'Қадамдарды дұрыс ретке қой' },
    { id: 'blocks', emoji: '🧱', title: 'Блоктар ойыны', desc: 'Программа блоктарын жина' },
    { id: 'logic', emoji: '🧠', title: 'Логика ойыны', desc: 'Егер-онда логикасы' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-bounce-slow">🎮</span>
          <h1 className="section-title">Ойындар</h1>
          <p className="text-xl text-muted-foreground">
            Ойнай отырып, алгоритмдік ойлауды дамыт!
          </p>
        </header>

        {/* Game selection */}
        {!activeGame && (
          <div className="grid sm:grid-cols-3 gap-6">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className="card-fun text-center hover:scale-105 transition-transform"
              >
                <span className="text-6xl mb-4 block">{game.emoji}</span>
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-muted-foreground">{game.desc}</p>
              </button>
            ))}
          </div>
        )}

        {/* Games */}
        {activeGame === 'ordering' && (
          <OrderingGame onBack={() => setActiveGame(null)} />
        )}
        {activeGame === 'blocks' && (
          <BlocksGame onBack={() => setActiveGame(null)} />
        )}
        {activeGame === 'logic' && (
          <LogicGame onBack={() => setActiveGame(null)} />
        )}
      </div>
    </div>
  );
}

// Ойын 1: Алгоритм реттеу
function OrderingGame({ onBack }: { onBack: () => void }) {
  const scenarios = [
    {
      title: 'Ас дайындау',
      emoji: '🍳',
      correctOrder: ['Продуктыларды ал', 'Қазанды от үстіне қой', 'Май құй', 'Жұмыртқа сындыр', 'Араластыр'],
    },
    {
      title: 'Мектепке бару',
      emoji: '🏫',
      correctOrder: ['Оян', 'Жуын', 'Киін', 'Таңғы ас іш', 'Үйден шық'],
    },
    {
      title: 'Кітап оқу',
      emoji: '📚',
      correctOrder: ['Кітапты ал', 'Бетін аш', 'Оқи бастa', 'Бетін аудар', 'Кітапты жап'],
    },
  ];

  const [currentScenario, setCurrentScenario] = useState(0);
  const [items, setItems] = useState(() => [...scenarios[0].correctOrder].sort(() => Math.random() - 0.5));
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

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
    const isCorrect = items.every((item, idx) => item === scenarios[currentScenario].correctOrder[idx]);
    setFeedback(isCorrect);
    
    if (isCorrect) {
      setScore(s => s + 1);
      recordGame('ordering', true);
      
      setTimeout(() => {
        if (currentScenario < scenarios.length - 1) {
          setCurrentScenario(c => c + 1);
          setItems([...scenarios[currentScenario + 1].correctOrder].sort(() => Math.random() - 0.5));
          setFeedback(null);
        }
      }, 1500);
    } else {
      recordGame('ordering', false);
    }
  };

  const scenario = scenarios[currentScenario];

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ← Артқа
      </button>

      <div className="card-topic border-secondary">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">{scenario.emoji}</span>
            {scenario.title}
          </h3>
          <div className="text-xl font-bold text-accent">
            Ұпай: {score} ⭐
          </div>
        </div>

        <p className="text-lg mb-6">
          Қадамдарды дұрыс ретке қой!
        </p>

        <div className="space-y-3 mb-6">
          {items.map((item, index) => (
            <div key={item} className="draggable-item flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <span className="font-semibold text-lg">{item}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => moveUp(index)}
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-2xl"
                >
                  ⬆️
                </button>
                <button
                  onClick={() => moveDown(index)}
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors text-2xl"
                >
                  ⬇️
                </button>
              </div>
            </div>
          ))}
        </div>

        <button onClick={checkAnswer} className="btn-primary text-lg">
          Тексеру ✓
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentScenario < scenarios.length - 1 ? "Жарайсың! Келесі деңгейге өтеміз! 🚀" : "Керемет! Барлық деңгейді өттің! 🎉"}
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}

// Ойын 2: Блоктар ойыны
function BlocksGame({ onBack }: { onBack: () => void }) {
  const challenges = [
    {
      task: 'Мысық жасыл жалаушаны басқанда 10 қадам жүріп, "Сәлем!" деп айтсын',
      correctBlocks: ['events', 'motion', 'looks'],
      options: [
        { id: 'events', type: 'events' as const, text: '🏳️ жасыл жалауша басылғанда' },
        { id: 'motion', type: 'motion' as const, text: '10 қадам жүру' },
        { id: 'looks', type: 'looks' as const, text: '"Сәлем!" деп айту' },
        { id: 'control', type: 'control' as const, text: '10 рет қайталау' },
        { id: 'sound', type: 'sound' as const, text: 'Дыбыс ойнату' },
      ],
    },
    {
      task: 'Спрайт 5 рет секірсін (y-ты өзгертіп)',
      correctBlocks: ['events', 'control', 'motion'],
      options: [
        { id: 'events', type: 'events' as const, text: '🏳️ жасыл жалауша басылғанда' },
        { id: 'control', type: 'control' as const, text: '5 рет қайталау' },
        { id: 'motion', type: 'motion' as const, text: 'y-ты 20-ға өзгерту' },
        { id: 'looks', type: 'looks' as const, text: 'Костюмді ауыстыру' },
        { id: 'sound', type: 'sound' as const, text: 'Дыбыс ойнату' },
      ],
    },
  ];

  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const toggleBlock = (blockId: string) => {
    setSelectedBlocks(prev =>
      prev.includes(blockId) ? prev.filter(b => b !== blockId) : [...prev, blockId]
    );
  };

  const checkAnswer = () => {
    const challenge = challenges[currentChallenge];
    const isCorrect = challenge.correctBlocks.every(b => selectedBlocks.includes(b)) &&
                      selectedBlocks.length === challenge.correctBlocks.length;
    setFeedback(isCorrect);

    if (isCorrect) {
      setScore(s => s + 1);
      recordGame('blocks', true);

      setTimeout(() => {
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge(c => c + 1);
          setSelectedBlocks([]);
          setFeedback(null);
        }
      }, 1500);
    } else {
      recordGame('blocks', false);
    }
  };

  const challenge = challenges[currentChallenge];

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ← Артқа
      </button>

      <div className="card-topic border-highlight">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">🧱 Блоктарды таңда</h3>
          <div className="text-xl font-bold text-accent">
            Ұпай: {score} ⭐
          </div>
        </div>

        <div className="card-fun bg-muted/50 mb-6">
          <p className="text-lg font-semibold">{challenge.task}</p>
        </div>

        <p className="text-muted-foreground mb-4">
          Қажетті блоктарды бас ({challenge.correctBlocks.length} блок керек):
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {challenge.options.map((block) => (
            <div
              key={block.id}
              onClick={() => toggleBlock(block.id)}
              className="cursor-pointer"
            >
              <ScratchBlock 
                type={block.type} 
                selected={selectedBlocks.includes(block.id)}
              >
                {block.text}
              </ScratchBlock>
            </div>
          ))}
        </div>

        <button onClick={checkAnswer} className="btn-primary text-lg">
          Тексеру ✓
        </button>

        <TaskFeedback isCorrect={feedback} onClose={() => setFeedback(null)} />
      </div>
    </div>
  );
}

// Ойын 3: Логика ойыны
function LogicGame({ onBack }: { onBack: () => void }) {
  const questions = [
    {
      condition: 'Жаңбыр жауып тұр ☔',
      question: 'Не істеу керек?',
      options: ['Күндізгі көзілдірік ки', 'Қолшатыр ал', 'Шортик ки'],
      correct: 1,
    },
    {
      condition: 'Күн ыстық және жарық ☀️',
      question: 'Не істеу керек?',
      options: ['Бас киім ки', 'Жылы күрте ки', 'Қолшатыр ал'],
      correct: 0,
    },
    {
      condition: 'Сырт қар жауып тұр ❄️',
      question: 'Не істеу керек?',
      options: ['Жылы киім ки', 'Футболка ки', 'Сандал ки'],
      correct: 0,
    },
    {
      condition: 'Ас үйде тамақ дайындағысы келеді 🍳',
      question: 'Алдымен не істеу керек?',
      options: ['Тамақты же', 'Қолды жу', 'Ыдыстарды жу'],
      correct: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const checkAnswer = () => {
    const isCorrect = selected === questions[currentQuestion].correct;
    setFeedback(isCorrect);

    if (isCorrect) {
      setScore(s => s + 1);
      recordGame('logic', true);

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(c => c + 1);
          setSelected(null);
          setFeedback(null);
        }
      }, 1500);
    } else {
      recordGame('logic', false);
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ← Артқа
      </button>

      <div className="card-topic border-accent">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">🧠 Егер-онда логикасы</h3>
          <div className="text-xl font-bold text-accent">
            Ұпай: {score} ⭐
          </div>
        </div>

        <div className="card-fun bg-gradient-to-br from-accent/10 to-secondary/10 mb-6">
          <p className="text-2xl font-bold mb-2">{q.condition}</p>
          <p className="text-lg">{q.question}</p>
        </div>

        <div className="space-y-3 mb-6">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all text-lg font-semibold ${
                selected === index
                  ? 'border-secondary bg-secondary/10'
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button 
          onClick={checkAnswer} 
          className="btn-primary text-lg" 
          disabled={selected === null}
        >
          Тексеру ✓
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentQuestion < questions.length - 1 ? "Дұрыс! Келесі сұрақ! 🎯" : "Тамаша! Барлық сұрақты білдің! 🏆"}
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}
