import { Link } from '../router/Router';
import ThemeToggle from './ThemeToggle';
import Logo from '../assets/logo-worklifebalance.png';

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900 text-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Work-life balance logo"
            className="h-10 w-10 rounded-xl shadow-lg object-cover"
          />

          <div className="leading-tight">
            <p className="font-semibold text-sm">Work-life balance</p>
            <p className="text-[11px] text-slate-400">TRABALHO HÍBRIDO</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:justify-center">
          <Link to="/">Início</Link>
          <Link to="/tasks">Tarefas</Link>
          <Link to="/mood">Humor</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/members">Integrantes</Link>
        </nav>

        {/* Tema */}
        <div className="self-start sm:self-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
