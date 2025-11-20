import PageHeader from '../components/PageHeader';

type Member = {
  name: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  imageUrl: string;
};

const members: Member[] = [
  {
    name: 'Júlia Menezes',
    rm: '565568',
    turma: '1TDSPV',
    github: 'https://github.com/juliamenezesf',
    linkedin: 'https://www.linkedin.com/in/julia-menezesf/',
    imageUrl: '/imgs/julia.jfif',
  },
  {
    name: 'Pedro Henrique Costa',
    rm: '559932',
    turma: '1TDSPV',
    github: 'https://github.com/pedrocostah',
    linkedin: 'https://www.linkedin.com/in/pedrocostahc/',
    imageUrl: '/imgs/pedro.jpg',
  },
];

export default function Members() {
  return (
    <section className="space-y-4">
      <PageHeader
        title="Integrantes"
        subtitle="Conheça quem desenvolveu o Work-life balance."
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {members.map((member) => (
          <article
            key={member.rm}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex flex-col items-center text-center gap-2 bg-white/70 dark:bg-slate-900/70"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border border-slate-300 dark:border-slate-700"
            />
            <div className="text-sm">
              <p className="font-semibold">{member.name}</p>
              <p className="text-xs text-slate-500">
                RM {member.rm} · {member.turma}
              </p>
            </div>
            <div className="flex gap-3 text-xs mt-1">
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-300 hover:underline"
              >
                GitHub
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-300 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

