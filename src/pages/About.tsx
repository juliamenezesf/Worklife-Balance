import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <PageHeader
        title="Sobre o Work-life balance"
        subtitle="Entenda o propósito da aplicação dentro do contexto de trabalho híbrido."
      />

      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
        O Work-life balance é uma aplicação pensada para apoiar profissionais que trabalham
        no modelo híbrido, ajudando a organizar tarefas e acompanhar o bem-estar ao longo
        da semana.
      </p>

      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
        A proposta é oferecer um espaço simples para planejar o dia, registrar o humor
        e refletir sobre a rotina, favorecendo foco, pausas mais saudáveis e uma relação
        mais equilibrada entre vida pessoal e trabalho.
      </p>

      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
        Esta aplicação faz parte de um projeto acadêmico, conectando temas de tecnologia,
        design de interfaces e bem-estar no ambiente de trabalho.
      </p>
    </section>
  );
}
