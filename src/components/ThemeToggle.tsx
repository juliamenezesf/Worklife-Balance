import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full px-3 py-2 text-sm border border-slate-400 dark:border-slate-600
                 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
