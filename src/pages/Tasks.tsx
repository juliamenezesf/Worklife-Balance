import { useState } from 'react';
import PageHeader from '../components/PageHeader';

type LocalTask = {
  id: number;
  title: string;
  description?: string;
};

export default function Tasks() {
  const [tasks, setTasks] = useState<LocalTask[]>([
    {
      id: 1,
      title: 'Bloco de foco — Projeto GS',
      description: 'Trabalhar nas telas do Work-life balance.',
    },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask: LocalTask = {
      id: Date.now(),
      title,
      description,
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle('');
    setDescription('');
  }

  function handleRemove(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="Tarefas"
        subtitle="Organize suas tarefas do dia a dia. Por enquanto, os dados são locais."
      />

      <form onSubmit={handleAdd} className="grid gap-3 max-w-lg">
        <input
          className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
          placeholder="Descrição (opcional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 w-fit"
        >
          Adicionar tarefa (local)
        </button>
      </form>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Tarefas cadastradas
        </h2>

        {tasks.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhuma tarefa cadastrada ainda.</p>
        ) : (
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="py-3 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-medium text-sm">{task.title}</p>
                  {task.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {task.description}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(task.id)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

