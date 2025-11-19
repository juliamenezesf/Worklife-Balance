import ThemeToggle from './ThemeToggle';
import { Link } from '../router/Router';

export default function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo + título */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 font-bold text-lg">
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-50 text-sm">Work-life balance</span>
            <span className="text-[11px] text-slate-300 uppercase tracking-wide">
              Trabalho híbrido
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm text-slate-200">
          <Link to="/">Início</Link>
          <Link to="/tasks">Tarefas</Link>
          <Link to="/mood">Humor</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/members">Integrantes</Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
