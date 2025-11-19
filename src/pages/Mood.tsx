import { useState } from 'react';
import PageHeader from '../components/PageHeader';

type MoodEntry = {
  id: number;
  score: number;
  note?: string;
};

export default function Mood() {
  const [entries, setEntries] = useState<MoodEntry[]>([
    { id: 1, score: 3, note: 'Dia moderado, um pouco cansada.' },
  ]);
  const [score, setScore] = useState(3);
  const [note, setNote] = useState('');

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const newEntry: MoodEntry = { id: Date.now(), score, note };
    setEntries((prev) => [newEntry, ...prev]);
    setNote('');
    setScore(3);
  }

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <PageHeader
        title="Humor"
        subtitle="Registre como você está se sentindo ao longo dos dias. Por enquanto, os dados são locais."
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
                    : 'border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-200'
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
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 w-fit"
        >
          Salvar humor de hoje
        </button>
      </form>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Últimos registros (locais)
        </h2>
        <ul className="space-y-2 text-sm">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 flex justify-between gap-3"
            >
              <span>Humor: {entry.score}/5</span>
              {entry.note && (
                <span className="text-slate-500 dark:text-slate-400 text-xs max-w-xs">
                  {entry.note}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

