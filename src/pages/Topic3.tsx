import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { BlockBuilder, BlockDef } from '@/components/BlockBuilder';
import { ScratchEmbed } from '@/components/ScratchEmbed';
import { completeTask } from '@/lib/progress';

import goToSchoolImg from '@/assets/go-to-school.png';
import waveHelloImg from '@/assets/wave-hello.png';
import balloonImg from '@/assets/balloon.png';
import catDanceImg from '@/assets/cat-dance.png';
import catHelloImg from '@/assets/cat-hello.png';
import greenFlagImg from '@/assets/green-flag.png';
import houseImg from '@/assets/house.png';
import puzzleImg from '@/assets/puzzle.png';

// Тақырып 3: Жобалық жұмыс (1)
export default function Topic3() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <img src={puzzleImg} alt="Жоба" className="w-20 h-20 mx-auto mb-4 animate-float" />
          <h1 className="section-title">🎯 Жобалық жұмыс 🎯</h1>
          <p className="text-xl text-muted-foreground">✨ Өз жобаңды жаса! ✨</p>
        </header>

        <section className="card-topic border-accent mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            🎯 Жобалық жұмыс дегеніміз не? 🤔
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={catDanceImg} alt="Мысық" className="w-14 h-14 rounded-lg" />
            <img src={balloonImg} alt="Шар" className="w-14 h-14 rounded-lg" />
            <img src={goToSchoolImg} alt="Мектеп" className="w-14 h-14 rounded-lg" />
          </div>
          <p className="text-lg leading-relaxed">
            Бұл бөлімде сен өз бетіңше шағын жобалар жасайсың!
            <br />
            <span className="flex items-center gap-2 mt-2">
              👉 Блоктарды сүйреп жина, содан кейін Scratch-та тексер!
            </span>
          </p>
        </section>

        <div className="space-y-8">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>

        {/* Scratch Editor */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            🐱 Scratch редакторы
          </h2>
          <p className="text-muted-foreground mb-4">
            Жоғарыдағы блоктарды жинағаннан кейін, мұнда Scratch-та программалап көр!
          </p>
          <ScratchEmbed />
        </div>
      </div>
    </div>
  );
}

const project1Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша' },
  { id: 'say1', type: 'looks', label: '💬 "Мен мектепке барамын!"' },
  { id: 'move', type: 'motion', label: '🚶 50 қадам жүру' },
  { id: 'wait', type: 'control', label: '⏳ 1 секунд күту' },
  { id: 'say2', type: 'looks', label: '💬 "Сәлем, достар!"' },
  { id: 'costume', type: 'looks', label: '👗 Костюмді ауыстыру' },
];

function Project1() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex gap-2">
          <img src={houseImg} alt="Үй" className="w-14 h-14 rounded-lg" />
          <img src={goToSchoolImg} alt="Мектеп" className="w-14 h-14 rounded-lg" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">🚶 Жоба 1: Үйден мектепке 🚶</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Кейіпкер үйден шығып, мектепке барады және досына қол бұлғайды.
            <img src={waveHelloImg} alt="Қол бұлғау" className="w-8 h-8 rounded-lg" />
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">📋 Алгоритм:</h4>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <img src={greenFlagImg} alt="Жалауша" className="w-8 h-8 rounded-lg" />
            <span>Жасыл жалауша басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <img src={catHelloImg} alt="Сөйлеу" className="w-8 h-8 rounded-lg" />
            <span>Кейіпкер "Мен мектепке барамын!" дейді</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span>
            <img src={goToSchoolImg} alt="Жүру" className="w-8 h-8 rounded-lg" />
            <span>50 қадам оңға жүреді</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span>
            <span className="text-xl">⏳</span>
            <span>1 секунд күтеді</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">5️⃣</span>
            <img src={waveHelloImg} alt="Сәлем" className="w-8 h-8 rounded-lg" />
            <span>"Сәлем, достар!" дейді</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">6️⃣</span>
            <img src={waveHelloImg} alt="Қол бұлғау" className="w-8 h-8 rounded-lg" />
            <span>Қол бұлғайды (костюм ауыстыру)</span>
          </div>
        </div>
      </div>

      {/* Interactive Block Builder */}
      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={project1Blocks}
          correctOrder={['flag', 'say1', 'move', 'wait', 'say2', 'costume']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic3', 'project1');
              setCompleted(true);
            }
          }}
        />
      </div>

      {completed && (
        <div className="feedback-correct animate-pop">✅ Жоба орындалды! ⭐</div>
      )}
    </div>
  );
}

const project2Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша' },
  { id: 'goto', type: 'motion', label: '📍 y: -100 нүктесіне бару' },
  { id: 'repeat', type: 'control', label: '🔄 10 рет қайталау' },
  { id: 'changey', type: 'motion', label: '⬆️ y-ты 10-ға өзгерту' },
  { id: 'say', type: 'looks', label: '💬 "Сәлем!" деп 2 секунд' },
  { id: 'hide', type: 'looks', label: '👻 Жасыру' },
];

function Project2() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <img src={balloonImg} alt="Шар" className="w-16 h-16 rounded-lg" />
        <div>
          <h3 className="text-xl font-bold mb-2">🎈 Жоба 2: Ұшатын шар 🎈</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Шар жоғары ұшады ⬆️, "Сәлем!" дейді және жоғалып кетеді
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">📋 Алгоритм:</h4>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <img src={greenFlagImg} alt="Жалауша" className="w-8 h-8 rounded-lg" />
            <span>Жасыл жалауша басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <img src={balloonImg} alt="Шар" className="w-8 h-8 rounded-lg" />
            <span>Шар төменнен басталады (y = -100)</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span>
            <span className="text-xl">🔄⬆️</span>
            <span>10 рет қайталау: 10 қадам жоғары</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span>
            <img src={catHelloImg} alt="Сөйлеу" className="w-8 h-8 rounded-lg" />
            <span>"Сәлем!" деп 2 секунд айту</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">5️⃣</span>
            <span className="text-xl">👻</span>
            <span>Жасыру (hide)</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={project2Blocks}
          correctOrder={['flag', 'goto', 'repeat', 'changey', 'say', 'hide']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic3', 'project2');
              setCompleted(true);
            }
          }}
        />
      </div>

      {completed && (
        <div className="feedback-correct animate-pop">✅ Жоба орындалды! ⭐</div>
      )}
    </div>
  );
}

const project3Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша' },
  { id: 'forever', type: 'control', label: '♾️ Мәңгі қайталау' },
  { id: 'costume', type: 'looks', label: '👗 Келесі костюм' },
  { id: 'wait', type: 'control', label: '⏳ 0.3 секунд күту' },
  { id: 'turn', type: 'motion', label: '↩️ 15 градусқа бұрылу' },
];

function Project3() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <img src={catDanceImg} alt="Билейтін мысық" className="w-16 h-16 rounded-lg" />
        <div>
          <h3 className="text-xl font-bold mb-2">💃 Жоба 3: Билейтін мысық 💃</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Жасыл жалауша басылғанда мысық билей бастайды!
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">📋 Алгоритм:</h4>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <img src={greenFlagImg} alt="Жалауша" className="w-8 h-8 rounded-lg" />
            <span>Жасыл жалауша басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <span className="text-xl">♾️</span>
            <span>Мәңгі қайталау:</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg ml-8">
            <span className="text-2xl">🔸</span>
            <img src={catDanceImg} alt="Билеу" className="w-8 h-8 rounded-lg" />
            <span>Келесі костюмге ауысу</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg ml-8">
            <span className="text-2xl">🔸</span>
            <span className="text-xl">⏳</span>
            <span>0.3 секунд күту</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg ml-8">
            <span className="text-2xl">🔸</span>
            <span className="text-xl">↩️</span>
            <span>15 градусқа бұрылу</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={project3Blocks}
          correctOrder={['flag', 'forever', 'costume', 'wait', 'turn']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic3', 'project3');
              setCompleted(true);
            }
          }}
        />
      </div>

      {completed && (
        <div className="feedback-correct animate-pop">✅ Жоба орындалды! ⭐</div>
      )}
    </div>
  );
}
