import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { BlockBuilder, BlockDef } from '@/components/BlockBuilder';
import { ScratchEmbed } from '@/components/ScratchEmbed';
import { completeTask } from '@/lib/progress';

import scratchCatImg from '@/assets/scratch-cat.png';
import catHelloImg from '@/assets/cat-hello.png';
import rocketImg from '@/assets/rocket.png';

const micro1Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша' },
  { id: 'repeat', type: 'control', label: '🔄 4 рет қайталау' },
  { id: 'move', type: 'motion', label: '🚶 100 қадам жүру' },
  { id: 'turn', type: 'motion', label: '↩️ 90 градусқа бұрылу' },
];

const micro2Blocks: BlockDef[] = [
  { id: 'flag', type: 'events', label: '🏳️ жасыл жалауша' },
  { id: 'say1', type: 'looks', label: '💬 "Сәлем!" деп 2 секунд' },
  { id: 'size120', type: 'looks', label: '📈 Өлшемді 120% ету' },
  { id: 'wait', type: 'control', label: '⏳ 1 секунд күту' },
  { id: 'size100', type: 'looks', label: '📉 Өлшемді 100% ету' },
  { id: 'say2', type: 'looks', label: '💬 "Қалың қалай?"' },
];

const micro3Blocks: BlockDef[] = [
  { id: 'click', type: 'events', label: '👆 Осы спрайт басылғанда' },
  { id: 'up', type: 'motion', label: '⬆️ y-ты 50-ге өзгерту' },
  { id: 'sound', type: 'sound', label: '🔊 Дыбыс ойнату' },
  { id: 'wait', type: 'control', label: '⏳ 0.5 секунд күту' },
  { id: 'down', type: 'motion', label: '⬇️ y-ты -50-ге өзгерту' },
];

// Тақырып 5: Жобалық жұмыс (2)
export default function Topic5() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <img src={rocketImg} alt="Жоба" className="w-20 h-20 mx-auto mb-4 animate-wiggle" />
          <h1 className="section-title">🚀 Жобалық жұмыс (2) 🚀</h1>
          <p className="text-xl text-muted-foreground">⭐ Қосымша тапсырмалар ⭐</p>
        </header>

        <section className="card-topic border-pink mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <img src={rocketImg} alt="Жаңа деңгей" className="w-10 h-10 rounded-lg" />
            Жаңа деңгей! 🎯
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={scratchCatImg} alt="Мысық" className="w-14 h-14 rounded-lg" />
            <img src={catHelloImg} alt="Сәлем" className="w-14 h-14 rounded-lg" />
          </div>
          <p className="text-lg leading-relaxed">
            Сен қазір көп нәрсе білесің! 🧠<br />
            Енді блоктарды жинап, Scratch-та тексер! 💪
          </p>
        </section>

        <div className="space-y-8">
          <MicroTask1 />
          <MicroTask2 />
          <MicroTask3 />
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

function MicroTask1() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <img src={scratchCatImg} alt="Мысық" className="w-14 h-14 rounded-lg" />
        <div>
          <h3 className="text-xl font-bold mb-2">🔲 Тапсырма 1: Шаршы бойынша жүру 🔲</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Спрайтты шаршы (квадрат) бойынша жүргіз — 4 жағын өт! ⬛
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-secondary/10 to-accent/10 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">💡 Кеңес:</h4>
        <div className="flex items-center justify-center gap-2 mb-4 text-5xl">
          <span>⬆️</span><span>➡️</span><span>⬇️</span><span>⬅️</span>
        </div>
        <p className="text-lg mb-4 text-center">Шаршының 4 жағы бар. Әр жақта:</p>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span>
            <img src={scratchCatImg} alt="Жүру" className="w-8 h-8 rounded-lg" />
            <span>100 қадам жүр</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span>
            <span className="text-xl">↩️</span>
            <span>90 градусқа бұрыл</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span>
            <span className="text-xl">🔄</span>
            <span>Мұны 4 рет қайтала!</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={micro1Blocks}
          correctOrder={['flag', 'repeat', 'move', 'turn']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic5', 'micro1');
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

function MicroTask2() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <img src={catHelloImg} alt="Сәлем" className="w-14 h-14 rounded-lg" />
        <div>
          <h3 className="text-xl font-bold mb-2">👋 Тапсырма 2: Сәлемдесу анимациясы 👋</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Спрайт "Сәлем!" дейді, үлкейеді 📈, кішірейеді 📉 және қайта сәлем айтады
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-pink/10 to-highlight/10 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">📋 Алгоритм:</h4>
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={catHelloImg} alt="Сәлем" className="w-10 h-10 rounded-lg" />
          <span className="text-2xl">➡️📈➡️📉➡️</span>
          <img src={catHelloImg} alt="Сәлем" className="w-10 h-10 rounded-lg" />
        </div>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span><span className="text-xl">🏳️</span><span>Жасыл жалауша басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span><img src={catHelloImg} alt="Сәлем" className="w-8 h-8 rounded-lg" /><span>"Сәлем!" деп 2 секунд айт</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span><span className="text-xl">📈</span><span>Өлшемді 120%-ға өзгерт</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span><span className="text-xl">⏳</span><span>1 секунд күт</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">5️⃣</span><span className="text-xl">📉</span><span>Өлшемді 100%-ға қайтар</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">6️⃣</span><img src={catHelloImg} alt="Сұрау" className="w-8 h-8 rounded-lg" /><span>"Қалың қалай?" деп айт</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={micro2Blocks}
          correctOrder={['flag', 'say1', 'size120', 'wait', 'size100', 'say2']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic5', 'micro2');
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

function MicroTask3() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <img src={scratchCatImg} alt="Мысық" className="w-14 h-14 rounded-lg" />
        <div>
          <h3 className="text-xl font-bold mb-2">👆 Тапсырма 3: Басқанда реакция 👆</h3>
          <p className="text-muted-foreground flex items-center gap-2">
            Спрайтты басқанда ол секіреді 🦘 және дыбыс шығарады! 🔊
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-accent/10 to-secondary/10 mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">📋 Алгоритм:</h4>
        <div className="flex items-center justify-center gap-2 mb-4 text-4xl">
          <span>👆</span><span>➡️</span><span>🦘</span><span>➡️</span><span>🔊</span><span>➡️</span><span>⬇️</span>
        </div>
        <div className="space-y-3 text-lg">
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">1️⃣</span><img src={scratchCatImg} alt="Басу" className="w-8 h-8 rounded-lg" /><span>Осы спрайт басылғанда</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">2️⃣</span><span className="text-xl">⬆️🦘</span><span>y-ты 50-ге өзгерт (секіру)</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">3️⃣</span><span className="text-xl">🔊</span><span>"Мяу" дыбысын ойнат</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">4️⃣</span><span className="text-xl">⏳</span><span>0.5 секунд күт</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-background/50 rounded-lg">
            <span className="text-2xl">5️⃣</span><span className="text-xl">⬇️</span><span>y-ты -50-ге өзгерт (қайту)</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3 flex items-center gap-2">🧩 Блоктарды жина:</h4>
        <BlockBuilder
          availableBlocks={micro3Blocks}
          correctOrder={['click', 'up', 'sound', 'wait', 'down']}
          onComplete={() => {
            if (!completed) {
              completeTask('topic5', 'micro3');
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
