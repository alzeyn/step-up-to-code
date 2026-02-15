import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import houseImg from '@/assets/house.png';
import scratchCatImg from '@/assets/scratch-cat.png';
import puzzleImg from '@/assets/puzzle.png';
import openFolderImg from '@/assets/open-folder.png';
import saveIconImg from '@/assets/save-icon.png';
import rocketImg from '@/assets/rocket.png';
import gamepadImg from '@/assets/gamepad.png';
import trophyImg from '@/assets/trophy.png';

// Навигация компоненті - балаларға арналған мәзір
const navItems = [
  { path: '/', label: 'Үй беті', image: houseImg },
  { path: '/topic1', label: 'Менің алғашқы программам', image: scratchCatImg },
  { path: '/topic2', label: 'Scratch жоба құру', image: puzzleImg },
  { path: '/topic3', label: 'Жобалық жұмыс (1)', image: openFolderImg },
  { path: '/topic4', label: 'Scratch сақтау және ашу', image: saveIconImg },
  { path: '/topic5', label: 'Жобалық жұмыс (2)', image: rocketImg },
  { path: '/games', label: 'Ойындар', image: gamepadImg },
  { path: '/achievements', label: 'Менің жетістіктерім', image: trophyImg },
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
            <img src={rocketImg} alt="stepcoding" className="w-10 h-10 animate-wiggle" />
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
                <img src={item.image} alt={item.label} className="w-8 h-8 rounded-lg" />
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
