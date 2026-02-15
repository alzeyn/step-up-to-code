import { useState, useEffect } from 'react';
import { getProgress, badgeInfo, resetProgress, type Progress } from '@/lib/progress';

import trophyImg from '@/assets/trophy.png';
import scratchCatImg from '@/assets/scratch-cat.png';
import puzzleImg from '@/assets/puzzle.png';
import saveIconImg from '@/assets/save-icon.png';
import openFolderImg from '@/assets/open-folder.png';
import rocketImg from '@/assets/rocket.png';
import gamepadImg from '@/assets/gamepad.png';
import mazeImg from '@/assets/maze-game.png';
import robotImg from '@/assets/robot.png';
import patternImg from '@/assets/pattern.png';

// Жетістіктер беті
export default function AchievementsPage() {
  const [progress, setProgress] = useState<Progress | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!progress) return null;

  const topicImages: Record<string, { name: string; image: string }> = {
    topic1: { name: 'Менің алғашқы программам', image: scratchCatImg },
    topic2: { name: 'Scratch жоба құру', image: puzzleImg },
    topic3: { name: 'Жобалық жұмыс (1)', image: openFolderImg },
    topic4: { name: 'Scratch сақтау', image: saveIconImg },
    topic5: { name: 'Жобалық жұмыс (2)', image: rocketImg },
  };

  const gameImages: Record<string, { name: string; image: string }> = {
    ordering: { name: 'Алгоритм реттеу', image: puzzleImg },
    blocks: { name: 'Блоктар ойыны', image: scratchCatImg },
    logic: { name: 'Логика ойыны', image: patternImg },
    maze: { name: 'Лабиринт', image: mazeImg },
    robot: { name: 'Робот бағдарламашы', image: robotImg },
    pattern: { name: 'Кезектілік', image: patternImg },
  };

  const handleReset = () => {
    if (confirm('❓ Барлық жетістіктерді өшіргің келе ме? ❓')) {
      resetProgress();
      setProgress(getProgress());
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <img src={trophyImg} alt="Жетістіктер" className="w-20 h-20 mx-auto mb-4 animate-sparkle" />
          <h1 className="section-title">🏆 Менің жетістіктерім 🏆</h1>
          <p className="text-xl text-muted-foreground">⭐ Сенің барлық жеңістерің осында! ⭐</p>
        </header>

        {/* Total stars */}
        <section className="card-topic border-primary mb-8 text-center">
          <img src={trophyImg} alt="Жұлдыздар" className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Жалпы жұлдыздар: {progress.totalStars} ⭐
          </h2>
          <p className="text-lg text-muted-foreground">
            {progress.totalStars === 0 && '📋 Тапсырмаларды орындап жұлдыздар жина! 🎯'}
            {progress.totalStars > 0 && progress.totalStars < 5 && '👍 Жақсы бастама! Жалғастыр! 🚀'}
            {progress.totalStars >= 5 && progress.totalStars < 10 && '🎉 Тамаша! Сен жақсы жұмыс істеп жатырсың! 💪'}
            {progress.totalStars >= 10 && '🏆 Керемет! Сен шынайы программистсің! 🚀👨‍💻'}
          </p>
        </section>

        {/* Badges */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <img src={trophyImg} alt="Медальдар" className="w-8 h-8 rounded-lg" />
            Медальдар
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(badgeInfo).map(([id, info]) => {
              const earned = progress.badges.includes(id);
              return (
                <div
                  key={id}
                  className={`card-fun text-center transition-all ${
                    earned ? 'border-4 border-primary' : 'opacity-50 grayscale'
                  }`}
                >
                  <div className={`achievement-badge mx-auto mb-4 ${!earned && 'bg-muted'}`}>
                    {earned ? info.emoji : '🔒'}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{info.name}</h3>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                  {earned && (
                    <span className="inline-block mt-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                      ✅ Алынды!
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Topic progress */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">📚 Тақырыптар бойынша</h2>
          
          <div className="space-y-4">
            {Object.entries(progress.topics).map(([id, topic]) => {
              const percentage = Math.round((topic.completed / topic.total) * 100);
              const topicInfo = topicImages[id] || { name: id, image: scratchCatImg };
              return (
                <div key={id} className="card-fun">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold flex items-center gap-2">
                      <img src={topicInfo.image} alt={topicInfo.name} className="w-10 h-10 rounded-lg" />
                      {topicInfo.name}
                    </h3>
                    <span className="text-lg font-bold text-accent flex items-center gap-1">
                      {topic.completed}/{topic.total} ⭐
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${percentage}%` }} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {percentage === 100 ? '🎉✅ Толық орындалды!' : `${percentage}% орындалды 📈`}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Games stats */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <img src={gamepadImg} alt="Ойындар" className="w-8 h-8 rounded-lg" />
            Ойындар статистикасы
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {Object.entries(progress.games).map(([id, game]) => {
              const gameInfo = gameImages[id] || { name: id, image: gamepadImg };
              return (
                <div key={id} className="card-fun text-center">
                  <img src={gameInfo.image} alt={gameInfo.name} className="w-12 h-12 mx-auto mb-3 rounded-lg" />
                  <h3 className="font-bold mb-2">{gameInfo.name}</h3>
                  <div className="text-lg">
                    <p className="flex items-center justify-center gap-2">
                      🎮 Ойнады: <span className="font-bold">{game.played}</span>
                    </p>
                    <p className="text-accent flex items-center justify-center gap-2">
                      🏆 Жеңді: <span className="font-bold">{game.won}</span> ⭐
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Reset button */}
        <div className="text-center">
          <button 
            onClick={handleReset}
            className="text-muted-foreground hover:text-destructive transition-colors text-sm flex items-center gap-2 mx-auto"
          >
            🗑️ Жетістіктерді өшіру
          </button>
        </div>
      </div>
    </div>
  );
}
