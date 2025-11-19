import Header from './components/Header';
import { Router } from './router/Router';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Mood from './pages/Mood';
import About from './pages/About';
import Contact from './pages/Contact';
import Members from './pages/Members';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Router
          routes={{
            '/': <Home />,
            '/tasks': <Tasks />,
            '/mood': <Mood />,
            '/about': <About />,
            '/contact': <Contact />,
            '/members': <Members />,
            '/404': <div>Página não encontrada</div>,
          }}
        />
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 text-[11px] text-center py-4 text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} WorkLife Balance
      </footer>
    </div>
  );
}
