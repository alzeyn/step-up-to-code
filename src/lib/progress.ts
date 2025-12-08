// Progress tracking utilities using localStorage
// Бұл файл баланың жетістіктерін сақтауға арналған

export interface TopicProgress {
  completed: number;
  total: number;
  tasks: Record<string, boolean>;
}

export interface GameStats {
  played: number;
  won: number;
}

export interface Progress {
  topics: Record<string, TopicProgress>;
  games: Record<string, GameStats>;
  badges: string[];
  totalStars: number;
}

const STORAGE_KEY = 'stepcoding_progress';

const defaultProgress: Progress = {
  topics: {
    topic1: { completed: 0, total: 4, tasks: {} },
    topic2: { completed: 0, total: 3, tasks: {} },
    topic3: { completed: 0, total: 3, tasks: {} },
    topic4: { completed: 0, total: 2, tasks: {} },
    topic5: { completed: 0, total: 3, tasks: {} },
  },
  games: {
    ordering: { played: 0, won: 0 },
    blocks: { played: 0, won: 0 },
    logic: { played: 0, won: 0 },
  },
  badges: [],
  totalStars: 0,
};

export function getProgress(): Progress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading progress:', e);
  }
  return { ...defaultProgress };
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

export function completeTask(topicId: string, taskId: string): Progress {
  const progress = getProgress();
  
  if (!progress.topics[topicId]) {
    progress.topics[topicId] = { completed: 0, total: 4, tasks: {} };
  }
  
  if (!progress.topics[topicId].tasks[taskId]) {
    progress.topics[topicId].tasks[taskId] = true;
    progress.topics[topicId].completed += 1;
    progress.totalStars += 1;
    
    // Check for badges
    checkAndAwardBadges(progress);
  }
  
  saveProgress(progress);
  return progress;
}

export function recordGame(gameId: string, won: boolean): Progress {
  const progress = getProgress();
  
  if (!progress.games[gameId]) {
    progress.games[gameId] = { played: 0, won: 0 };
  }
  
  progress.games[gameId].played += 1;
  if (won) {
    progress.games[gameId].won += 1;
    progress.totalStars += 1;
  }
  
  checkAndAwardBadges(progress);
  saveProgress(progress);
  return progress;
}

function checkAndAwardBadges(progress: Progress): void {
  // Бастапқы программист - complete first task
  if (progress.totalStars >= 1 && !progress.badges.includes('beginner')) {
    progress.badges.push('beginner');
  }
  
  // Алгоритм шебері - complete 5 tasks
  if (progress.totalStars >= 5 && !progress.badges.includes('algorithm_master')) {
    progress.badges.push('algorithm_master');
  }
  
  // Scratch жұлдызы - complete 10 tasks
  if (progress.totalStars >= 10 && !progress.badges.includes('scratch_star')) {
    progress.badges.push('scratch_star');
  }
  
  // Ойын чемпионы - win 5 games
  const totalWins = Object.values(progress.games).reduce((sum, g) => sum + g.won, 0);
  if (totalWins >= 5 && !progress.badges.includes('game_champion')) {
    progress.badges.push('game_champion');
  }
  
  // Кодтау кейіпкері - complete all topics
  const allTopicsComplete = Object.values(progress.topics).every(
    t => t.completed >= t.total
  );
  if (allTopicsComplete && !progress.badges.includes('coding_hero')) {
    progress.badges.push('coding_hero');
  }
}

export function resetProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export const badgeInfo: Record<string, { name: string; emoji: string; description: string }> = {
  beginner: {
    name: 'Бастапқы программист',
    emoji: '🌟',
    description: 'Бірінші тапсырманы орындадың!',
  },
  algorithm_master: {
    name: 'Алгоритм шебері',
    emoji: '🧩',
    description: '5 тапсырманы орындадың!',
  },
  scratch_star: {
    name: 'Scratch жұлдызы',
    emoji: '⭐',
    description: '10 тапсырманы орындадың!',
  },
  game_champion: {
    name: 'Ойын чемпионы',
    emoji: '🏆',
    description: '5 ойында жеңіске жеттің!',
  },
  coding_hero: {
    name: 'Кодтау кейіпкері',
    emoji: '🦸',
    description: 'Барлық тақырыптарды аяқтадың!',
  },
};
