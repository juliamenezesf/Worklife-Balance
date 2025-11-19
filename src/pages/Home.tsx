export default function Home() {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex items-center">
      <div className="max-w-4xl space-y-6">
        <p className="inline-flex items-center gap-2 text-xs rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 px-3 py-1 border border-cyan-500/40">
          💼 Equilíbrio entre trabalho e vida
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
          Equilíbrio <span className="text-cyan-500">híbrido</span> e bem-estar em um só lugar.
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
          O Work-life balance ajuda profissionais híbridos a organizar tarefas
          e check-ins de humor, com recomendações de bem-estar e foco para o dia a dia.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#/tasks"
            className="px-5 py-2.5 rounded-full bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 transition"
          >
            Começar pelas Tarefas
          </a>
          <a
            href="#/mood"
            className="px-5 py-2.5 rounded-full border border-slate-400 text-sm text-slate-800 dark:border-slate-500 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition"
          >
            Fazer um check-in de humor
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 dark:text-slate-400 pt-2">
          <span>⚡ Organização simples do dia</span>
          <span>🧘 Pausas e bem-estar</span>
          <span>📊 Acompanhamento do humor</span>
        </div>
      </div>
    </section>
  );
}
