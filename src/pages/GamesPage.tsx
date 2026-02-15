import { useState } from 'react';
import { TaskFeedback } from '@/components/TaskFeedback';
import { ScratchBlock } from '@/components/ScratchBlock';
import { recordGame } from '@/lib/progress';

import mazeImg from '@/assets/maze-game.png';
import robotImg from '@/assets/robot.png';
import patternImg from '@/assets/pattern.png';
import puzzleImg from '@/assets/puzzle.png';
import scratchCatImg from '@/assets/scratch-cat.png';
import gamepadImg from '@/assets/gamepad.png';
import houseImg from '@/assets/house.png';

// Ойындар беті
export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    { id: 'maze', image: mazeImg, title: 'Лабиринт', desc: 'Мысықты үйге жеткіз!' },
    { id: 'robot', image: robotImg, title: 'Робот бағдарламашы', desc: 'Роботқа командалар бер!' },
    { id: 'pattern', image: patternImg, title: 'Кезектілік', desc: 'Келесі затты тап!' },
    { id: 'ordering', image: puzzleImg, title: 'Алгоритм реттеу', desc: 'Қадамдарды дұрыс ретке қой' },
    { id: 'blocks', image: scratchCatImg, title: 'Блоктар ойыны', desc: 'Программа блоктарын жина' },
    { id: 'logic', image: gamepadImg, title: 'Логика ойыны', desc: 'Егер-онда логикасы' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <img src={gamepadImg} alt="Ойындар" className="w-20 h-20 mx-auto mb-4 animate-bounce-slow" />
          <h1 className="section-title">🎯 Ойындар 🎯</h1>
          <p className="text-xl text-muted-foreground">
            Ойнай отырып, алгоритмдік ойлауды дамыт!
          </p>
        </header>

        {/* Game selection */}
        {!activeGame && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className="card-fun text-center hover:scale-105 transition-transform"
              >
                <img src={game.image} alt={game.title} className="w-16 h-16 mx-auto mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-muted-foreground">{game.desc}</p>
              </button>
            ))}
          </div>
        )}

        {/* Games */}
        {activeGame === 'maze' && <MazeGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'robot' && <RobotGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'pattern' && <PatternGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'ordering' && <OrderingGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'blocks' && <BlocksGame onBack={() => setActiveGame(null)} />}
        {activeGame === 'logic' && <LogicGame onBack={() => setActiveGame(null)} />}
      </div>
    </div>
  );
}

// 🏠 Лабиринт ойыны - Мысықты үйге жеткіз
function MazeGame({ onBack }: { onBack: () => void }) {
  const levels = [
    {
      size: 5,
      start: { x: 0, y: 0 },
      end: { x: 4, y: 4 },
      walls: [[1, 0], [1, 1], [1, 2], [3, 2], [3, 3], [3, 4]],
      emoji: '🐱',
      goalEmoji: '🏠',
    },
    {
      size: 5,
      start: { x: 0, y: 2 },
      end: { x: 4, y: 2 },
      walls: [[1, 1], [1, 2], [1, 3], [3, 0], [3, 1], [3, 3], [3, 4]],
      emoji: '🐕',
      goalEmoji: '🦴',
    },
    {
      size: 6,
      start: { x: 0, y: 0 },
      end: { x: 5, y: 5 },
      walls: [[1, 0], [1, 1], [2, 3], [2, 4], [3, 1], [3, 2], [4, 4], [4, 5]],
      emoji: '🐰',
      goalEmoji: '🥕',
    },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [position, setPosition] = useState(levels[0].start);
  const [moves, setMoves] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const level = levels[currentLevel];

  const isWall = (x: number, y: number) => {
    return level.walls.some(([wx, wy]) => wx === x && wy === y);
  };

  const move = (direction: string) => {
    let newX = position.x;
    let newY = position.y;

    if (direction === 'up' && position.y > 0) newY--;
    if (direction === 'down' && position.y < level.size - 1) newY++;
    if (direction === 'left' && position.x > 0) newX--;
    if (direction === 'right' && position.x < level.size - 1) newX++;

    if (!isWall(newX, newY)) {
      setPosition({ x: newX, y: newY });
      setMoves([...moves, direction]);

      // Check if reached goal
      if (newX === level.end.x && newY === level.end.y) {
        setFeedback(true);
        setScore(s => s + 1);
        recordGame('maze', true);

        setTimeout(() => {
          if (currentLevel < levels.length - 1) {
            const nextLevel = currentLevel + 1;
            setCurrentLevel(nextLevel);
            setPosition(levels[nextLevel].start);
            setMoves([]);
            setFeedback(null);
          }
        }, 1500);
      }
    }
  };

  const resetLevel = () => {
    setPosition(level.start);
    setMoves([]);
    setFeedback(null);
  };

  const directionEmoji: Record<string, string> = {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ⬅️ Артқа
      </button>

      <div className="card-topic border-primary">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">🏠</span>
            Лабиринт - Деңгей {currentLevel + 1}
          </h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <p className="text-lg mb-4 flex items-center gap-2">
          <span className="text-3xl">{level.emoji}</span>
          {level.goalEmoji}-ға жеткіз!
          <span className="text-3xl">{level.goalEmoji}</span>
        </p>

        {/* Maze Grid */}
        <div className="flex justify-center mb-6">
          <div 
            className="grid gap-1 p-4 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-2xl"
            style={{ gridTemplateColumns: `repeat(${level.size}, 1fr)` }}
          >
            {Array.from({ length: level.size * level.size }).map((_, i) => {
              const x = i % level.size;
              const y = Math.floor(i / level.size);
              const isCurrentPos = position.x === x && position.y === y;
              const isGoal = level.end.x === x && level.end.y === y;
              const isWallCell = isWall(x, y);

              return (
                <div
                  key={i}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-3xl transition-all ${
                    isWallCell 
                      ? 'bg-stone-400 dark:bg-stone-600' 
                      : 'bg-green-300/50 dark:bg-green-700/30'
                  } ${isCurrentPos ? 'animate-bounce-slow' : ''}`}
                >
                  {isCurrentPos ? level.emoji : isGoal ? level.goalEmoji : isWallCell ? '🧱' : ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <button onClick={() => move('up')} className="w-16 h-16 bg-primary text-primary-foreground rounded-xl text-3xl hover:scale-110 transition-transform">
            ⬆️
          </button>
          <div className="flex gap-2">
            <button onClick={() => move('left')} className="w-16 h-16 bg-primary text-primary-foreground rounded-xl text-3xl hover:scale-110 transition-transform">
              ⬅️
            </button>
            <button onClick={() => move('down')} className="w-16 h-16 bg-primary text-primary-foreground rounded-xl text-3xl hover:scale-110 transition-transform">
              ⬇️
            </button>
            <button onClick={() => move('right')} className="w-16 h-16 bg-primary text-primary-foreground rounded-xl text-3xl hover:scale-110 transition-transform">
              ➡️
            </button>
          </div>
        </div>

        {/* Move history */}
        <div className="card-fun bg-muted/50 mb-4">
          <p className="font-bold mb-2">📝 Сенің қадамдарың:</p>
          <div className="flex flex-wrap gap-2">
            {moves.length === 0 ? (
              <span className="text-muted-foreground">Әлі қадам жасалмады...</span>
            ) : (
              moves.map((m, i) => (
                <span key={i} className="text-2xl">{directionEmoji[m]}</span>
              ))
            )}
          </div>
        </div>

        <button onClick={resetLevel} className="btn-secondary">
          🔄 Қайта бастау
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentLevel < levels.length - 1 ? "🎉 Жарайсың! Келесі деңгей! 🚀" : "🏆 Керемет! Барлық лабиринттен өттің! 🎉"}
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}

// 🤖 Робот бағдарламашы ойыны
function RobotGame({ onBack }: { onBack: () => void }) {
  const levels = [
    {
      gridSize: 4,
      start: { x: 0, y: 3 },
      goal: { x: 3, y: 0 },
      obstacles: [[1, 1], [2, 2]],
      collectibles: [[1, 3], [3, 2]],
      hint: '➡️➡️➡️⬆️⬆️⬆️',
    },
    {
      gridSize: 5,
      start: { x: 0, y: 4 },
      goal: { x: 4, y: 0 },
      obstacles: [[1, 2], [2, 1], [3, 3]],
      collectibles: [[2, 4], [4, 2]],
      hint: '➡️➡️⬆️⬆️➡️➡️⬆️⬆️',
    },
  ];

  const [currentLevel, setCurrentLevel] = useState(0);
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [robotPos, setRobotPos] = useState(levels[0].start);
  const [collected, setCollected] = useState<number[][]>([]);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const level = levels[currentLevel];

  const addCommand = (cmd: string) => {
    if (!isRunning && commands.length < 12) {
      setCommands([...commands, cmd]);
    }
  };

  const removeLastCommand = () => {
    if (!isRunning) {
      setCommands(commands.slice(0, -1));
    }
  };

  const clearCommands = () => {
    if (!isRunning) {
      setCommands([]);
      setRobotPos(level.start);
      setCollected([]);
      setFeedback(null);
    }
  };

  const runProgram = async () => {
    if (commands.length === 0) return;
    
    setIsRunning(true);
    setRobotPos(level.start);
    setCollected([]);
    
    let pos = { ...level.start };
    let collectedItems: number[][] = [];

    for (const cmd of commands) {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let newPos = { ...pos };
      if (cmd === 'up') newPos.y = Math.max(0, pos.y - 1);
      if (cmd === 'down') newPos.y = Math.min(level.gridSize - 1, pos.y + 1);
      if (cmd === 'left') newPos.x = Math.max(0, pos.x - 1);
      if (cmd === 'right') newPos.x = Math.min(level.gridSize - 1, pos.x + 1);

      // Check obstacle
      const hitObstacle = level.obstacles.some(([ox, oy]) => ox === newPos.x && oy === newPos.y);
      if (!hitObstacle) {
        pos = newPos;
        setRobotPos({ ...pos });

        // Check collectible
        const collectibleIndex = level.collectibles.findIndex(([cx, cy]) => cx === pos.x && cy === pos.y);
        if (collectibleIndex !== -1 && !collectedItems.some(([cx, cy]) => cx === pos.x && cy === pos.y)) {
          collectedItems.push([pos.x, pos.y]);
          setCollected([...collectedItems]);
        }
      }
    }

    // Check if reached goal
    if (pos.x === level.goal.x && pos.y === level.goal.y) {
      setFeedback(true);
      setScore(s => s + 1 + collectedItems.length);
      recordGame('robot', true);

      setTimeout(() => {
        if (currentLevel < levels.length - 1) {
          const nextLevel = currentLevel + 1;
          setCurrentLevel(nextLevel);
          setRobotPos(levels[nextLevel].start);
          setCommands([]);
          setCollected([]);
          setFeedback(null);
        }
      }, 2000);
    } else {
      setFeedback(false);
      recordGame('robot', false);
    }

    setIsRunning(false);
  };

  const cmdEmoji: Record<string, string> = {
    up: '⬆️',
    down: '⬇️',
    left: '⬅️',
    right: '➡️',
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ⬅️ Артқа
      </button>

      <div className="card-topic border-secondary">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">🤖</span>
            Робот бағдарламашы - Деңгей {currentLevel + 1}
          </h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <p className="text-lg mb-4 flex items-center gap-2">
          <span className="text-3xl">🤖</span>
          Роботты ⭐-ға жеткізу үшін командалар жаз!
          <span className="text-3xl">⭐</span>
        </p>

        {/* Grid */}
        <div className="flex justify-center mb-6">
          <div 
            className="grid gap-1 p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl"
            style={{ gridTemplateColumns: `repeat(${level.gridSize}, 1fr)` }}
          >
            {Array.from({ length: level.gridSize * level.gridSize }).map((_, i) => {
              const x = i % level.gridSize;
              const y = Math.floor(i / level.gridSize);
              const isRobot = robotPos.x === x && robotPos.y === y;
              const isGoal = level.goal.x === x && level.goal.y === y;
              const isObstacle = level.obstacles.some(([ox, oy]) => ox === x && oy === y);
              const isCollectible = level.collectibles.some(([cx, cy]) => cx === x && cy === y);
              const wasCollected = collected.some(([cx, cy]) => cx === x && cy === y);

              return (
                <div
                  key={i}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center text-3xl transition-all ${
                    isObstacle 
                      ? 'bg-red-300 dark:bg-red-900/50' 
                      : 'bg-blue-200/50 dark:bg-blue-800/30'
                  } ${isRobot ? 'animate-bounce-slow' : ''}`}
                >
                  {isRobot ? '🤖' : isGoal ? '⭐' : isObstacle ? '🚧' : (isCollectible && !wasCollected) ? '💎' : ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Command buttons */}
        <div className="flex justify-center gap-3 mb-4">
          {['up', 'down', 'left', 'right'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => addCommand(cmd)}
              disabled={isRunning}
              className="w-14 h-14 bg-secondary text-secondary-foreground rounded-xl text-2xl hover:scale-110 transition-transform disabled:opacity-50"
            >
              {cmdEmoji[cmd]}
            </button>
          ))}
        </div>

        {/* Command list */}
        <div className="card-fun bg-muted/50 mb-4">
          <p className="font-bold mb-2">📝 Сенің программаң ({commands.length}/12):</p>
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {commands.length === 0 ? (
              <span className="text-muted-foreground">Командаларды қос...</span>
            ) : (
              commands.map((cmd, i) => (
                <span key={i} className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-xl">
                  {cmdEmoji[cmd]}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <button onClick={runProgram} disabled={isRunning || commands.length === 0} className="btn-primary">
            ▶️ Бастау
          </button>
          <button onClick={removeLastCommand} disabled={isRunning} className="btn-secondary">
            ↩️ Жою
          </button>
          <button onClick={clearCommands} disabled={isRunning} className="btn-secondary">
            🗑️ Тазалау
          </button>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          💡 Кеңес: {level.hint}
        </div>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentLevel < levels.length - 1 ? "🎉 Тамаша программист! Келесі деңгей! 🚀" : "🏆 Керемет! Сен нағыз программист боласың! 🎉"}
          incorrectMessage="😊 Робот мақсатқа жетпеді. Қайта тырыс! 💪"
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}

// 🔮 Кезектілік ойыны (Pattern Game)
function PatternGame({ onBack }: { onBack: () => void }) {
  const patterns = [
    {
      sequence: ['🍎', '🍌', '🍎', '🍌', '🍎'],
      answer: '🍌',
      options: ['🍎', '🍌', '🍇'],
    },
    {
      sequence: ['⭐', '⭐', '🌙', '⭐', '⭐'],
      answer: '🌙',
      options: ['⭐', '🌙', '☀️'],
    },
    {
      sequence: ['🔴', '🔵', '🟢', '🔴', '🔵'],
      answer: '🟢',
      options: ['🔴', '🔵', '🟢'],
    },
    {
      sequence: ['🐱', '🐕', '🐰', '🐱', '🐕'],
      answer: '🐰',
      options: ['🐱', '🐕', '🐰'],
    },
    {
      sequence: ['1️⃣', '2️⃣', '3️⃣', '1️⃣', '2️⃣'],
      answer: '3️⃣',
      options: ['1️⃣', '2️⃣', '3️⃣'],
    },
    {
      sequence: ['🚗', '🚌', '🚗', '🚌', '🚗'],
      answer: '🚌',
      options: ['🚗', '🚌', '🚁'],
    },
    {
      sequence: ['🌸', '🌸', '🌼', '🌸', '🌸'],
      answer: '🌼',
      options: ['🌸', '🌼', '🌹'],
    },
    {
      sequence: ['👆', '👇', '👆', '👇', '👆'],
      answer: '👇',
      options: ['👆', '👇', '👈'],
    },
  ];

  const [currentPattern, setCurrentPattern] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const pattern = patterns[currentPattern];

  const checkAnswer = () => {
    const isCorrect = selected === pattern.answer;
    setFeedback(isCorrect);

    if (isCorrect) {
      setScore(s => s + 1);
      recordGame('pattern', true);

      setTimeout(() => {
        if (currentPattern < patterns.length - 1) {
          setCurrentPattern(c => c + 1);
          setSelected(null);
          setFeedback(null);
        }
      }, 1500);
    } else {
      recordGame('pattern', false);
    }
  };

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="btn-secondary mb-4">
        ⬅️ Артқа
      </button>

      <div className="card-topic border-highlight">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">🔮</span>
            Кезектілік тап - {currentPattern + 1}/{patterns.length}
          </h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <p className="text-lg mb-6 text-center">
          ❓ Келесі не келеді? ❓
        </p>

        {/* Pattern display */}
        <div className="flex justify-center items-center gap-3 mb-8 flex-wrap">
          {pattern.sequence.map((item, i) => (
            <span key={i} className="text-5xl sm:text-6xl animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }}>
              {item}
            </span>
          ))}
          <span className="text-5xl sm:text-6xl">❓</span>
        </div>

        {/* Options */}
        <div className="flex justify-center gap-4 mb-6">
          {pattern.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelected(option)}
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-4 transition-all text-5xl flex items-center justify-center ${
                selected === option
                  ? 'border-secondary bg-secondary/20 scale-110'
                  : 'border-border hover:border-secondary/50 hover:scale-105'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button 
          onClick={checkAnswer} 
          disabled={selected === null}
          className="btn-primary text-lg mx-auto block"
        >
          ✅ Тексеру
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentPattern < patterns.length - 1 ? "🎯 Дұрыс! Келесі кезектілік! 🎯" : "🏆 Тамаша! Сен кезектіліктерді жақсы білесің! 🎉"}
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}

// Ойын 1: Алгоритм реттеу
function OrderingGame({ onBack }: { onBack: () => void }) {
  const scenarios = [
    {
      title: '🍳 Ас дайындау 🍳',
      emoji: '🍳',
      steps: [
        { text: 'Продуктыларды ал', emoji: '🥚🧈' },
        { text: 'Қазанды от үстіне қой', emoji: '🍳🔥' },
        { text: 'Май құй', emoji: '🧈' },
        { text: 'Жұмыртқа сындыр', emoji: '🥚' },
        { text: 'Араластыр', emoji: '🥄' },
      ],
      correctOrder: ['Продуктыларды ал', 'Қазанды от үстіне қой', 'Май құй', 'Жұмыртқа сындыр', 'Араластыр'],
    },
    {
      title: '🏫 Мектепке бару 🏫',
      emoji: '🏫',
      steps: [
        { text: 'Оян', emoji: '⏰😴' },
        { text: 'Жуын', emoji: '🚿💦' },
        { text: 'Киін', emoji: '👕👖' },
        { text: 'Таңғы ас іш', emoji: '🥣🍞' },
        { text: 'Үйден шық', emoji: '🚶🚪' },
      ],
      correctOrder: ['Оян', 'Жуын', 'Киін', 'Таңғы ас іш', 'Үйден шық'],
    },
    {
      title: '📚 Кітап оқу 📚',
      emoji: '📚',
      steps: [
        { text: 'Кітапты ал', emoji: '📕✋' },
        { text: 'Бетін аш', emoji: '📖' },
        { text: 'Оқи бастa', emoji: '👀📖' },
        { text: 'Бетін аудар', emoji: '📄➡️' },
        { text: 'Кітапты жап', emoji: '📕✅' },
      ],
      correctOrder: ['Кітапты ал', 'Бетін аш', 'Оқи бастa', 'Бетін аудар', 'Кітапты жап'],
    },
  ];

  const [currentScenario, setCurrentScenario] = useState(0);
  const [items, setItems] = useState(() => {
    const steps = scenarios[0].steps.map(s => s);
    return [...steps].sort(() => Math.random() - 0.5);
  });
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
    const isCorrect = items.every((item, idx) => item.text === scenarios[currentScenario].correctOrder[idx]);
    setFeedback(isCorrect);
    
    if (isCorrect) {
      setScore(s => s + 1);
      recordGame('ordering', true);
      
      setTimeout(() => {
        if (currentScenario < scenarios.length - 1) {
          const nextScenario = currentScenario + 1;
          setCurrentScenario(nextScenario);
          const steps = scenarios[nextScenario].steps.map(s => s);
          setItems([...steps].sort(() => Math.random() - 0.5));
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
        ⬅️ Артқа
      </button>

      <div className="card-topic border-secondary">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <span className="text-4xl">{scenario.emoji}</span>
            {scenario.title}
          </h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <p className="text-lg mb-6 flex items-center gap-2">
          <span className="text-2xl">🔢</span>
          Қадамдарды дұрыс ретке қой!
          <span className="text-2xl">⬆️⬇️</span>
        </p>

        <div className="space-y-3 mb-6">
          {items.map((item, index) => (
            <div key={item.text} className="draggable-item flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </span>
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-semibold text-lg">{item.text}</span>
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
          ✅ Тексеру
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentScenario < scenarios.length - 1 ? "🎉 Жарайсың! Келесі деңгейге өтеміз! 🚀" : "🏆 Керемет! Барлық деңгейді өттің! 🎉"}
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
      task: '🐱 Мысық жасыл жалаушаны басқанда 10 қадам жүріп, "Сәлем!" деп айтсын 🏳️➡️🚶➡️💬',
      emoji: '🐱🏳️🚶💬',
      correctBlocks: ['events', 'motion', 'looks'],
      options: [
        { id: 'events', type: 'events' as const, text: '🏳️ жасыл жалауша басылғанда', emoji: '🏳️' },
        { id: 'motion', type: 'motion' as const, text: '🚶 10 қадам жүру', emoji: '🚶' },
        { id: 'looks', type: 'looks' as const, text: '💬 "Сәлем!" деп айту', emoji: '💬' },
        { id: 'control', type: 'control' as const, text: '🔄 10 рет қайталау', emoji: '🔄' },
        { id: 'sound', type: 'sound' as const, text: '🔊 Дыбыс ойнату', emoji: '🔊' },
      ],
    },
    {
      task: '🐱 Спрайт 5 рет секірсін (жоғары-төмен) 🦘🦘🦘🦘🦘',
      emoji: '🐱🦘',
      correctBlocks: ['events', 'control', 'motion'],
      options: [
        { id: 'events', type: 'events' as const, text: '🏳️ жасыл жалауша басылғанда', emoji: '🏳️' },
        { id: 'control', type: 'control' as const, text: '🔄 5 рет қайталау', emoji: '🔄' },
        { id: 'motion', type: 'motion' as const, text: '⬆️ y-ты 20-ға өзгерту', emoji: '⬆️' },
        { id: 'looks', type: 'looks' as const, text: '👗 Костюмді ауыстыру', emoji: '👗' },
        { id: 'sound', type: 'sound' as const, text: '🔊 Дыбыс ойнату', emoji: '🔊' },
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
        ⬅️ Артқа
      </button>

      <div className="card-topic border-highlight">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">🧱 Блоктарды таңда 🧩</h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <div className="card-fun bg-muted/50 mb-6">
          <div className="text-4xl mb-3 text-center">{challenge.emoji}</div>
          <p className="text-lg font-semibold text-center">{challenge.task}</p>
        </div>

        <p className="text-muted-foreground mb-4 flex items-center gap-2">
          <span className="text-xl">👆</span>
          Қажетті блоктарды бас ({challenge.correctBlocks.length} блок керек):
          <span className="text-xl">🧩</span>
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
          ✅ Тексеру
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
      condition: '☔ Жаңбыр жауып тұр ☔',
      conditionEmoji: '🌧️☔💧',
      question: '❓ Не істеу керек? ❓',
      options: [
        { text: 'Күндізгі көзілдірік ки', emoji: '🕶️' },
        { text: 'Қолшатыр ал', emoji: '☂️' },
        { text: 'Шортик ки', emoji: '🩳' },
      ],
      correct: 1,
    },
    {
      condition: '☀️ Күн ыстық және жарық ☀️',
      conditionEmoji: '☀️🌡️🔥',
      question: '❓ Не істеу керек? ❓',
      options: [
        { text: 'Бас киім ки', emoji: '🧢' },
        { text: 'Жылы күрте ки', emoji: '🧥' },
        { text: 'Қолшатыр ал', emoji: '☂️' },
      ],
      correct: 0,
    },
    {
      condition: '❄️ Сырт қар жауып тұр ❄️',
      conditionEmoji: '❄️☃️🌨️',
      question: '❓ Не істеу керек? ❓',
      options: [
        { text: 'Жылы киім ки', emoji: '🧥🧣' },
        { text: 'Футболка ки', emoji: '👕' },
        { text: 'Сандал ки', emoji: '👡' },
      ],
      correct: 0,
    },
    {
      condition: '🍳 Ас үйде тамақ дайындағысы келеді 🍳',
      conditionEmoji: '👨‍🍳🍳🥘',
      question: '❓ Алдымен не істеу керек? ❓',
      options: [
        { text: 'Тамақты же', emoji: '🍽️😋' },
        { text: 'Қолды жу', emoji: '🧼🖐️' },
        { text: 'Ыдыстарды жу', emoji: '🍽️🧽' },
      ],
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
        ⬅️ Артқа
      </button>

      <div className="card-topic border-accent">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">🧠 Егер-онда логикасы 💭</h3>
          <div className="text-xl font-bold text-accent">
            🏆 Ұпай: {score} ⭐
          </div>
        </div>

        <div className="card-fun bg-gradient-to-br from-accent/10 to-secondary/10 mb-6">
          <div className="text-5xl mb-3 text-center">{q.conditionEmoji}</div>
          <p className="text-2xl font-bold mb-2 text-center">{q.condition}</p>
          <p className="text-lg text-center">{q.question}</p>
        </div>

        <div className="space-y-3 mb-6">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all text-lg font-semibold flex items-center gap-4 ${
                selected === index
                  ? 'border-secondary bg-secondary/10'
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              <span className="text-3xl">{option.emoji}</span>
              <span>{option.text}</span>
            </button>
          ))}
        </div>

        <button 
          onClick={checkAnswer} 
          className="btn-primary text-lg" 
          disabled={selected === null}
        >
          ✅ Тексеру
        </button>

        <TaskFeedback 
          isCorrect={feedback} 
          correctMessage={currentQuestion < questions.length - 1 ? "🎯 Дұрыс! Келесі сұрақ! 🎯" : "🏆 Тамаша! Барлық сұрақты білдің! 🏆"}
          onClose={() => setFeedback(null)} 
        />
      </div>
    </div>
  );
}
