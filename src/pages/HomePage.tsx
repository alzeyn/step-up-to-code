import { Link } from 'react-router-dom';

// Басты бет - балаларды қарсы алу беті
export default function HomePage() {
  const topics = [
    { path: '/topic1', emoji: '📝', title: 'Менің алғашқы программам', desc: 'Сызықтық алгоритмді үйрен' },
    { path: '/topic2', emoji: '🧩', title: 'Scratch жоба құру', desc: 'Спрайт пен блоктарды үйрен' },
    { path: '/topic3', emoji: '📁', title: 'Жобалық жұмыс (1)', desc: 'Өз жобаңды жаса' },
    { path: '/topic4', emoji: '💾', title: 'Scratch сақтау', desc: 'Жобаны сақтау және ашу' },
    { path: '/topic5', emoji: '📂', title: 'Жобалық жұмыс (2)', desc: 'Қосымша тапсырмалар' },
    { path: '/games', emoji: '🎮', title: 'Ойындар', desc: 'Қызықты ойындар ойна' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 text-8xl animate-float opacity-50">🚀</div>
        <div className="absolute bottom-20 left-10 text-6xl animate-bounce-slow opacity-50">⭐</div>
        <div className="absolute top-1/2 right-1/4 text-5xl animate-wiggle opacity-40">🎈</div>

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
            <p className="text-xl leading-relaxed">
              Сәлем, кішкентай программист! 👋
              <br />
              Бұл сайтта сен <strong>алгоритмдік ойлауды</strong> үйренесің.
              <br />
              Scratch программасында қызықты жобалар жасайсың! 🎨
            </p>
          </div>

          {/* What is algorithmic thinking */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="card-topic border-secondary">
              <span className="text-5xl mb-4 block">🧠</span>
              <h3 className="text-xl font-bold mb-3">Алгоритмдік ойлау дегеніміз не?</h3>
              <p className="text-lg">
                Бұл — <strong>қадам-қадамымен ойлау</strong>! 
                Мысалы, шай қайнату үшін не істейсіз? 
                Алдымен су құйасыз, сосын қайнатасыз, сосын шай саласыз.
              </p>
            </div>
            <div className="card-topic border-accent">
              <span className="text-5xl mb-4 block">🌍</span>
              <h3 className="text-xl font-bold mb-3">Күнделікті өмірде қалай көмектеседі?</h3>
              <p className="text-lg">
                Мектепке жиналу, тамақ дайындау, ойын ойнау — 
                бәрі <strong>алгоритм</strong>! 
                Қадамдарды дұрыс жоспарлауды үйренесің.
              </p>
            </div>
          </div>

          {/* Start button */}
          <Link to="/topic1" className="btn-primary inline-flex items-center gap-3 text-2xl mb-12">
            <span>Бастау</span>
            <span className="text-3xl">🚀</span>
          </Link>
        </div>
      </section>

      {/* Topics grid */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-8">
            📚 Біздің тақырыптар
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Link
                key={topic.path}
                to={topic.path}
                className="card-fun group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="emoji-icon block mb-4 group-hover:animate-wiggle">
                  {topic.emoji}
                </span>
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
              <span className="text-5xl">👨‍👩‍👧‍👦</span>
              <div>
                <h3 className="text-xl font-bold mb-3">Ата-аналар мен мұғалімдерге</h3>
                <p className="text-lg leading-relaxed">
                  "stepcoding" сайты 1-2 сынып оқушыларына арналған. 
                  Балалар Scratch программасын пайдаланып, алгоритмдік ойлауды 
                  дамытады. Әр тапсырма қарапайым және қызықты етіп жасалған. 
                  Баланың жетістіктерін "Менің жетістіктерім" бөлімінен көре аласыз! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
