import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { completeTask } from '@/lib/progress';

// Тақырып 5: Жобалық жұмыс (2)
export default function Topic5() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-wiggle">📂</span>
          <h1 className="section-title">Жобалық жұмыс (2)</h1>
          <p className="text-xl text-muted-foreground">Қосымша тапсырмалар</p>
        </header>

        {/* Intro */}
        <section className="card-topic border-pink mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>🚀</span> Жаңа деңгей!
          </h2>
          <p className="text-lg leading-relaxed">
            Сен қазір көп нәрсе білесің! 
            Енді қиынырақ тапсырмаларды орындап көр. 
            Бұл тапсырмалар сенің шеберлігіңді дамытады! 💪
          </p>
        </section>

        {/* Tasks */}
        <div className="space-y-8">
          <MicroTask1 />
          <MicroTask2 />
          <MicroTask3 />
        </div>
      </div>
    </div>
  );
}

// Микро-тапсырма 1: Шаршы бойынша жүру
function MicroTask1() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic5', 'micro1');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">⬛</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Тапсырма 1: Шаршы бойынша жүру</h3>
          <p className="text-muted-foreground">
            Спрайтты шаршы (квадрат) бойынша жүргіз — 4 жағын өт!
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-secondary/10 to-accent/10 mb-6">
        <h4 className="font-bold mb-3">💡 Кеңес:</h4>
        <p className="text-lg mb-4">
          Шаршының 4 жағы бар. Әр жақта:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>100 қадам жүр</li>
          <li>90 градусқа бұрыл</li>
          <li>Мұны 4 рет қайтала!</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Қажетті блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша</ScratchBlock>
          <ScratchBlock type="control">4 рет қайталау</ScratchBlock>
          <ScratchBlock type="motion">100 қадам жүру</ScratchBlock>
          <ScratchBlock type="motion">90 градусқа бұрылу</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Орындалды! ✅' : 'Орындадым ✓'}
      </button>
    </div>
  );
}

// Микро-тапсырма 2: Сәлемдесу анимациясы
function MicroTask2() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic5', 'micro2');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">👋</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Тапсырма 2: Сәлемдесу анимациясы</h3>
          <p className="text-muted-foreground">
            Спрайт "Сәлем!" дейді, үлкейеді, кішірейеді және қайта сәлем айтады.
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-pink/10 to-highlight/10 mb-6">
        <h4 className="font-bold mb-3">📋 Алгоритм:</h4>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Жасыл жалауша басылғанда</li>
          <li>"Сәлем!" деп 2 секунд айт</li>
          <li>Өлшемді 120%-ға өзгерт</li>
          <li>1 секунд күт</li>
          <li>Өлшемді 100%-ға қайтар</li>
          <li>"Қалың қалай?" деп айт</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Қажетті блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша</ScratchBlock>
          <ScratchBlock type="looks">"..." деп 2 секунд айту</ScratchBlock>
          <ScratchBlock type="looks">Өлшемді 120% ету</ScratchBlock>
          <ScratchBlock type="control">1 секунд күту</ScratchBlock>
          <ScratchBlock type="looks">Өлшемді 100% ету</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Орындалды! ✅' : 'Орындадым ✓'}
      </button>
    </div>
  );
}

// Микро-тапсырма 3: Басқанда реакция
function MicroTask3() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic5', 'micro3');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">👆</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Тапсырма 3: Басқанда реакция</h3>
          <p className="text-muted-foreground">
            Спрайтты басқанда ол секіреді және дыбыс шығарады!
          </p>
        </div>
      </div>

      <div className="card-fun bg-gradient-to-br from-accent/10 to-secondary/10 mb-6">
        <h4 className="font-bold mb-3">📋 Алгоритм:</h4>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Осы спрайт басылғанда</li>
          <li>y-ты 50-ге өзгерт (секіру)</li>
          <li>"Мяу" дыбысын ойнат</li>
          <li>0.5 секунд күт</li>
          <li>y-ты -50-ге өзгерт (қайту)</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Қажетті блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">Осы спрайт басылғанда</ScratchBlock>
          <ScratchBlock type="motion">y-ты 50-ге өзгерту</ScratchBlock>
          <ScratchBlock type="sound">Дыбыс ойнату</ScratchBlock>
          <ScratchBlock type="control">0.5 секунд күту</ScratchBlock>
          <ScratchBlock type="motion">y-ты -50-ге өзгерту</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Орындалды! ✅' : 'Орындадым ✓'}
      </button>
    </div>
  );
}
