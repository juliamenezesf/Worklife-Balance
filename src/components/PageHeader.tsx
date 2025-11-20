type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-6 space-y-1">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {subtitle && (
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
    </header>
  );
}
