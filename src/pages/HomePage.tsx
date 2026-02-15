import { Link } from 'react-router-dom';

import rocketImg from '@/assets/rocket.png';
import scratchCatImg from '@/assets/scratch-cat.png';
import puzzleImg from '@/assets/puzzle.png';
import saveIconImg from '@/assets/save-icon.png';
import openFolderImg from '@/assets/open-folder.png';
import gamepadImg from '@/assets/gamepad.png';
import trophyImg from '@/assets/trophy.png';
import pourWaterImg from '@/assets/pour-water.png';
import boilWaterImg from '@/assets/boil-water.png';
import teaReadyImg from '@/assets/tea-ready.png';

// Басты бет - балаларды қарсы алу беті
export default function HomePage() {
  const topics = [
    { path: '/topic1', image: scratchCatImg, title: 'Менің алғашқы программам', desc: '1️⃣2️⃣3️⃣ Сызықтық алгоритмді үйрен' },
    { path: '/topic2', image: puzzleImg, title: 'Scratch жоба құру', desc: '🎨 Спрайт пен блоктарды үйрен' },
    { path: '/topic3', image: openFolderImg, title: 'Жобалық жұмыс (1)', desc: '💻 Өз жобаңды жаса' },
    { path: '/topic4', image: saveIconImg, title: 'Scratch сақтау', desc: '✅ Жобаны сақтау және ашу' },
    { path: '/topic5', image: rocketImg, title: 'Жобалық жұмыс (2)', desc: '⭐ Қосымша тапсырмалар' },
    { path: '/games', image: gamepadImg, title: 'Ойындар', desc: '🎈 Қызықты ойындар ойна' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Background decorations */}
        <img src={rocketImg} alt="" className="absolute top-10 right-10 w-20 h-20 animate-float opacity-50" />
        <img src={trophyImg} alt="" className="absolute bottom-20 left-10 w-16 h-16 animate-bounce-slow opacity-50" />
        <img src={puzzleImg} alt="" className="absolute top-1/2 right-1/4 w-14 h-14 animate-wiggle opacity-40" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Main title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-secondary via-accent to-highlight bg-clip-text text-transparent">
                stepcoding
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              🌟 Кодтауды үйренейік! 🌟
            </p>
          </div>

          {/* Welcome message */}
          <div className="card-fun max-w-2xl mx-auto mb-8">
            <img src={scratchCatImg} alt="Сәлем" className="w-20 h-20 mx-auto mb-4" />
            <p className="text-xl leading-relaxed">
              Сәлем, кішкентай программист!
              <br />
              <span className="flex items-center justify-center gap-2 mt-2">
                Бұл сайтта сен <strong>алгоритмдік ойлауды</strong> үйренесің.
              </span>
              <span className="flex items-center justify-center gap-2 mt-2">
                Scratch программасында қызықты жобалар жасайсың!
              </span>
            </p>
            <button
              onClick={() => {
                const text = 'Сәлем, кішкентай программист! Бұл сайтта сен алгоритмдік ойлауды үйренесің. Scratch программасында қызықты жобалар жасайсың!';
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'kk-KZ';
                utterance.rate = 0.85;
                speechSynthesis.cancel();
                speechSynthesis.speak(utterance);
              }}
              className="mt-4 btn-primary inline-flex items-center gap-2 text-lg"
              aria-label="Тыңдау"
            >
              🔊 Тыңдау
            </button>
          </div>

          {/* What is algorithmic thinking */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card-topic border-secondary">
              <img src={scratchCatImg} alt="Алгоритм" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">🤔 Алгоритмдік ойлау дегеніміз не? 🤔</h3>
              <div className="text-4xl mb-3">1️⃣➡️2️⃣➡️3️⃣</div>
              <p className="text-lg">
                Бұл — <strong>қадам-қадамымен ойлау</strong>! 
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <img src={pourWaterImg} alt="Су құю" className="w-10 h-10 rounded-lg" />
                <span className="text-2xl">➡️</span>
                <img src={boilWaterImg} alt="Қайнату" className="w-10 h-10 rounded-lg" />
                <span className="text-2xl">➡️</span>
                <img src={teaReadyImg} alt="Шай" className="w-10 h-10 rounded-lg" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Шай қайнату: су құй ➡️ қайнат ➡️ шай сал
              </p>
            </div>
            <div className="card-topic border-accent">
              <img src={rocketImg} alt="Күнделікті" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">🌟 Күнделікті өмірде қалай көмектеседі? 🌟</h3>
              <p className="text-lg">
                Мектепке жиналу 🎒, тамақ дайындау 🍳, ойын ойнау 🎮 — 
                бәрі <strong>алгоритм</strong>! 
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                📋 Қадамдарды дұрыс жоспарлауды үйренесің!
              </p>
            </div>
          </div>

          {/* Start button */}
          <Link to="/topic1" className="btn-primary inline-flex items-center gap-3 text-2xl mb-12">
            <img src={rocketImg} alt="Бастау" className="w-8 h-8" />
            <span>Бастау!</span>
            <img src={rocketImg} alt="Бастау" className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Topics grid */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-8">📚 Біздің тақырыптар 📚</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link
                key={topic.path}
                to={topic.path}
                className="card-fun group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={topic.image} 
                  alt={topic.title} 
                  className="w-16 h-16 mx-auto mb-4 group-hover:animate-wiggle" 
                />
                <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                <p className="text-muted-foreground">{topic.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Message to parents */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="card-topic border-pink bg-gradient-to-br from-card to-pink/10">
            <div className="flex items-start gap-4">
              <img src={trophyImg} alt="Ата-ана" className="w-16 h-16 rounded-lg" />
              <div>
                <h3 className="text-xl font-bold mb-3">👨‍👩‍👧 Ата-аналар мен мұғалімдерге 👨‍🏫</h3>
                <p className="text-lg leading-relaxed">
                  "stepcoding" сайты 1-2 сынып оқушыларына арналған.
                  <br />
                  Балалар Scratch программасын пайдаланып, алгоритмдік ойлауды дамытады. 🧠
                  <br />
                  Әр тапсырма қарапайым және қызықты етіп жасалған. ✨
                  <br />
                  Баланың жетістіктерін "Менің жетістіктерім" бөлімінен көре аласыз! 🏆⭐
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
