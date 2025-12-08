import { useState } from 'react';
import { ScratchBlock } from '@/components/ScratchBlock';
import { completeTask } from '@/lib/progress';

// Тақырып 3: Жобалық жұмыс (1)
export default function Topic3() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <header className="text-center mb-10">
          <span className="text-6xl mb-4 block animate-float">📁</span>
          <h1 className="section-title">Жобалық жұмыс</h1>
          <p className="text-xl text-muted-foreground">Өз жобаңды жаса!</p>
        </header>

        {/* Intro */}
        <section className="card-topic border-accent mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>🎯</span> Жобалық жұмыс дегеніміз не?
          </h2>
          <p className="text-lg leading-relaxed">
            Бұл бөлімде сен өз бетіңше шағын жобалар жасайсың! 
            Scratch-ты аш және төмендегі сценарийлерді программала. 
            Сенің қиялыңды көрсет! 🌈
          </p>
        </section>

        {/* Projects */}
        <div className="space-y-8">
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </div>
  );
}

// Жоба 1: Үйден мектепке
function Project1() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic3', 'project1');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">🏠➡️🏫</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Жоба 1: Үйден мектепке</h3>
          <p className="text-muted-foreground">
            Кейіпкер үйден шығып, мектепке барады және досына қол бұлғайды.
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3">📋 Алгоритм:</h4>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Жасыл жалауша басылғанда</li>
          <li>Кейіпкер "Мен мектепке барамын!" дейді</li>
          <li>50 қадам оңға жүреді</li>
          <li>1 секунд күтеді</li>
          <li>"Сәлем, достар!" дейді</li>
          <li>Қол бұлғайды (костюм ауыстыру)</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Ұсынылатын блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша</ScratchBlock>
          <ScratchBlock type="looks">"..." деп айту</ScratchBlock>
          <ScratchBlock type="motion">50 қадам жүру</ScratchBlock>
          <ScratchBlock type="control">1 секунд күту</ScratchBlock>
          <ScratchBlock type="looks">Костюмді ауыстыру</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Жоба орындалды! ✅' : 'Жобаны орындадым ✓'}
      </button>
    </div>
  );
}

// Жоба 2: Ұшатын шар
function Project2() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic3', 'project2');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">🎈</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Жоба 2: Ұшатын шар</h3>
          <p className="text-muted-foreground">
            Шар жоғары ұшады, "Сәлем!" дейді және жоғалып кетеді.
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3">📋 Алгоритм:</h4>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Жасыл жалауша басылғанда</li>
          <li>Шар төменнен басталады (y = -100)</li>
          <li>10 рет қайталау: 10 қадам жоғары</li>
          <li>"Сәлем!" деп 2 секунд айту</li>
          <li>Жасыру (hide)</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Ұсынылатын блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша</ScratchBlock>
          <ScratchBlock type="motion">y: -100 нүктесіне бару</ScratchBlock>
          <ScratchBlock type="control">10 рет қайталау</ScratchBlock>
          <ScratchBlock type="motion">y-ты 10-ға өзгерту</ScratchBlock>
          <ScratchBlock type="looks">"Сәлем!" деп 2 секунд айту</ScratchBlock>
          <ScratchBlock type="looks">Жасыру</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Жоба орындалды! ✅' : 'Жобаны орындадым ✓'}
      </button>
    </div>
  );
}

// Жоба 3: Билейтін мысық
function Project3() {
  const [completed, setCompleted] = useState(false);

  const markComplete = () => {
    if (!completed) {
      completeTask('topic3', 'project3');
      setCompleted(true);
    }
  };

  return (
    <div className="task-card">
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">🐱💃</span>
        <div>
          <h3 className="text-xl font-bold mb-2">Жоба 3: Билейтін мысық</h3>
          <p className="text-muted-foreground">
            Жасыл жалауша басылғанда мысық билей бастайды!
          </p>
        </div>
      </div>

      <div className="card-fun bg-muted/50 mb-6">
        <h4 className="font-bold mb-3">📋 Алгоритм:</h4>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Жасыл жалауша басылғанда</li>
          <li>Мәңгі қайталау:</li>
          <li className="ml-6">Келесі костюмге ауысу</li>
          <li className="ml-6">0.3 секунд күту</li>
          <li className="ml-6">15 градусқа бұрылу</li>
        </ol>
      </div>

      <div className="mb-6">
        <h4 className="font-bold mb-3">🎨 Ұсынылатын блоктар:</h4>
        <div className="flex flex-wrap gap-3">
          <ScratchBlock type="events">🏳️ жасыл жалауша</ScratchBlock>
          <ScratchBlock type="control">Мәңгі қайталау</ScratchBlock>
          <ScratchBlock type="looks">Келесі костюм</ScratchBlock>
          <ScratchBlock type="control">0.3 секунд күту</ScratchBlock>
          <ScratchBlock type="motion">15 градусқа бұрылу</ScratchBlock>
        </div>
      </div>

      <button 
        onClick={markComplete} 
        className={completed ? 'btn-accent' : 'btn-secondary'}
      >
        {completed ? 'Жоба орындалды! ✅' : 'Жобаны орындадым ✓'}
      </button>
    </div>
  );
}
