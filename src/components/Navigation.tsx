import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Code, Puzzle, FolderOpen, Save, Gamepad2, Trophy } from 'lucide-react';

// Навигация компоненті - балаларға арналған мәзір
const navItems = [
  { path: '/', label: 'Үй беті', icon: Home, emoji: '🏠' },
  { path: '/topic1', label: 'Менің алғашқы программам', icon: Code, emoji: '📝' },
  { path: '/topic2', label: 'Scratch жоба құру', icon: Puzzle, emoji: '🧩' },
  { path: '/topic3', label: 'Жобалық жұмыс (1)', icon: FolderOpen, emoji: '📁' },
  { path: '/topic4', label: 'Scratch сақтау және ашу', icon: Save, emoji: '💾' },
  { path: '/topic5', label: 'Жобалық жұмыс (2)', icon: FolderOpen, emoji: '📂' },
  { path: '/games', label: 'Ойындар', icon: Gamepad2, emoji: '🎮' },
  { path: '/achievements', label: 'Менің жетістіктерім', icon: Trophy, emoji: '🏆' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-secondary text-secondary-foreground p-3 rounded-xl shadow-card"
        aria-label="Мәзірді ашу"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar navigation */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-sidebar text-sidebar-foreground z-40 
                    transform transition-transform duration-300 shadow-card
                    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="text-4xl animate-wiggle">🚀</span>
            <div>
              <h1 className="text-2xl font-extrabold text-sidebar-primary">stepcoding</h1>
              <p className="text-sm opacity-80">Кодтауды үйренейік!</p>
            </div>
          </Link>
        </div>

        {/* Navigation links */}
        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-120px)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`nav-link ${isActive ? 'nav-link-active' : 'hover:bg-sidebar-accent'}`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-base leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
