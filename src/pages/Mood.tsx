import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { MoodLog } from '../types/mood';
import { MoodLogsService } from '../services/moodlogs';

export default function Mood() {
  const [entries, setEntries] = useState<MoodLog[]>([]);
  const [score, setScore] = useState(3);
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userId = 1;

  async function loadEntries() {
    try {
      setLoading(true);
      setError(null);
      const data = await MoodLogsService.list();
      const sorted = [...data].sort(
        (a, b) => new Date(b.loggedAt).getTime() - new Date(a.loggedAt).getTime()
      );
      setEntries(sorted);
    } catch (err) {
      console.error(err);
      setError('Não foi possível carregar os registros de humor.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEntries();
  }, []);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const loggedAt = new Date().toISOString();
      const stressScore = (6 - score) * 20;

      await MoodLogsService.create({
        userId,
        score,
        note,
        stressScore,
        loggedAt,
      });

      setNote('');
      setScore(3);

      await loadEntries();
    } catch (err) {
      console.error(err);
      setError('Erro ao salvar humor de hoje.');
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    try {
      setLoading(true);
      setError(null);
      await MoodLogsService.remove(id);
      await loadEntries();
    } catch (err) {
      console.error(err);
      setError('Erro ao remover registro de humor.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 pb-8">
      <PageHeader
        title="Humor"
        subtitle="Registre como você está se sentindo ao longo dos dias."
      />

      <form onSubmit={handleAdd} className="grid gap-3 max-w-md">
        <label className="text-sm text-slate-700 dark:text-slate-200">
          Como você está hoje? (1 = péssimo, 5 = excelente)
        </label>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setScore(value)}
              className={`w-10 h-10 rounded-full border text-sm
                ${
                  score === value
                    ? 'bg-cyan-500 text-slate-900 border-cyan-500'
                    : 'border-slate-400 dark:border-slate-600 text-slate-200'
                }`}
            >
              {value}
            </button>
          ))}
        </div>

        <textarea
          className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
          placeholder="Quer deixar uma observação?"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed w-fit"
        >
          {loading ? 'Salvando…' : 'Salvar humor de hoje'}
        </button>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </form>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Últimos registros (API)
        </h2>

        {loading && entries.length === 0 && (
          <p className="text-sm text-slate-500">Carregando registros…</p>
        )}

        {!loading && entries.length === 0 && !error && (
          <p className="text-sm text-slate-500">Nenhum registro de humor ainda.</p>
        )}

        <ul className="space-y-2 text-sm">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <span className="font-medium">Humor: {entry.score}/5</span>
                {entry.loggedAt && (
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                    {new Date(entry.loggedAt).toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {entry.note && (
                  <span className="text-slate-500 dark:text-slate-400 text-xs max-w-xs">
                    {entry.note}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => handleDelete(entry.id)}
                  className="text-xs text-red-500 hover:underline self-start sm:self-auto"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
