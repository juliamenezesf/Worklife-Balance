import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Task } from '../types/task';
import { TasksService } from '../services/tasks';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState(1); // por enquanto fixo/simples
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadTasks() {
    try {
      setLoading(true);
      setError(null);
      const data = await TasksService.list();
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError('Não foi possível carregar as tarefas.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setLoading(true);
      setError(null);

      await TasksService.create({
        title,
        description,
        userId,
        status: 'OPEN',
      });

      setTitle('');
      setDescription('');
      await loadTasks();
    } catch (err) {
      console.error(err);
      setError('Erro ao criar tarefa.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      setLoading(true);
      setError(null);
      await TasksService.remove(id);
      await loadTasks();
    } catch (err) {
      console.error(err);
      setError('Erro ao remover tarefa.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="Tarefas"
        subtitle="Organize suas tarefas do dia a dia. Agora os dados vêm da API."
      />

      <form onSubmit={handleCreate} className="grid gap-3 max-w-lg">
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

        <div className="flex flex-col gap-1 text-sm">
          <label>ID do usuário</label>
          <input
            type="number"
            min={1}
            className="border rounded-lg px-3 py-2 w-32 dark:bg-slate-900 dark:border-slate-700"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
        >
          {loading ? 'Salvando…' : 'Adicionar tarefa'}
        </button>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Tarefas cadastradas
        </h2>

        {loading && tasks.length === 0 && (
          <p className="text-sm text-slate-500">Carregando tarefas…</p>
        )}

        {!loading && tasks.length === 0 && !error && (
          <p className="text-sm text-slate-500">Nenhuma tarefa cadastrada ainda.</p>
        )}

        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {tasks.map((task) => (
            <li key={task.id} className="py-3 flex items-center justify-between gap-4">
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
                onClick={() => handleDelete(task.id)}
                className="text-xs text-red-500 hover:underline"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
