import PageHeader from '../components/PageHeader';

const faqs = [
  {
    q: 'O Work-life balance já integra com outras ferramentas?',
    a: 'Nesta versão, o foco está nas funcionalidades internas de tarefas e check-ins de humor.',
  },
  {
    q: 'Consigo usar no celular?',
    a: 'Sim! A interface foi pensada para ser responsiva e funcionar bem em telas menores.',
  },
];

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <PageHeader
        title="Contato & FAQ"
        subtitle="Veja se sua dúvida já está respondida ou envie uma mensagem."
      />

      {/* FAQ */}
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <article
            key={item.q}
            className="rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-white/70 dark:bg-slate-900/70"
          >
            <h2 className="text-sm font-semibold mb-1">{item.q}</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">{item.a}</p>
          </article>
        ))}
      </div>

      {/* Formulário estático */}
      <form className="space-y-3 max-w-md">
        <div className="flex flex-col gap-1 text-sm">
          <label>Nome</label>
          <input
            className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
            placeholder="Seu nome"
          />
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <label>E-mail</label>
          <input
            type="email"
            className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <label>Mensagem</label>
          <textarea
            className="border rounded-lg px-3 py-2 dark:bg-slate-900 dark:border-slate-700"
            placeholder="Como podemos te ajudar?"
          />
        </div>

        <button
          type="button"
          className="rounded-full px-5 py-2 bg-cyan-500 text-slate-900 text-sm font-medium hover:bg-cyan-400 w-fit"
        >
          Enviar (demo)
        </button>
      </form>
    </section>
  );
}

