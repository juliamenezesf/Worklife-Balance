import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Task } from '../types/task';
import { TasksService } from '../services/tasks';

type TaskType = 'FOCUS' | 'MEETING' | 'BREAK' | 'PERSONAL';
type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // userId fixo (pois não existe login na aplicação)
  const userId = 1;

  // novos campos
  const [date, setDate] = useState<string>(() => new Date().toISOString().slice(0, 10));
  const [startTime, setStartTime] = useState('09:00');
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [taskType, setTaskType] = useState<TaskType>('FOCUS');
  const [priority, setPriority] = useState<TaskPriority>('MEDIUM');

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

  function buildDates() {
    const start = new Date(`${date}T${startTime}:00`);
    const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

    return {
      startAt: start.toISOString(),
      endAt: end.toISOString(),
    };
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const { startAt, endAt } = buildDates();

      await TasksService.create({
        userId,
        title,
        description,
        startAt,
        endAt,
        taskType,
        priority,
        status: 'PENDING',
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
        subtitle="Organize suas tarefas do dia a dia."
      />

      <form onSubmit={handleCreate} className="grid gap-4 max-w-xl">

        <div className="grid gap-2">
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
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="flex flex-col gap-1">
            <label>Data</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Início</label>
            <input
              type="time"
              className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Duração (min)</label>
            <input
              type="number"
              min={15}
              step={15}
              className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex flex-col gap-1">
            <label>Tipo da tarefa</label>
            <select
              className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value as TaskType)}
            >
              <option value="FOCUS">Foco</option>
              <option value="MEETING">Reunião</option>
              <option value="BREAK">Pausa</option>
              <option value="PERSONAL">Pessoal</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>Prioridade</label>
            <select
              className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
              value={priority}
              onChange={(e) => setPriority(e.target.value as TaskPriority)}
            >
              <option value="LOW">Baixa</option>
              <option value="MEDIUM">Média</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={loading}
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
        >
          {loading ? 'Salvando…' : 'Adicionar tarefa'}
        </button>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>

      {/* Lista de tarefas */}
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Tarefas cadastradas
        </h2>

        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {tasks.map((task) => (
            <li key={task.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-sm">{task.title}</p>

                {task.description && (
                  <p className="text-xs text-slate-400">{task.description}</p>
                )}

                {task.startAt && task.endAt && (
                  <p className="text-[11px] text-slate-400">
                    {new Date(task.startAt).toLocaleString()} —{' '}
                    {new Date(task.endAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
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
