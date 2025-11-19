import { useEffect, useState, ReactNode } from 'react';

type Routes = Record<string, ReactNode>;

export function useHashRoute() {
  const [path, setPath] = useState<string>(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const onHashChange = () => {
      setPath(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function navigate(to: string) {
    window.location.hash = to;
  }

  return { path, navigate };
}

export function Router({ routes }: { routes: Routes }) {
  const { path } = useHashRoute();
  return <>{routes[path] ?? routes['/404'] ?? <div>Página não encontrada</div>}</>;
}

export function Link({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a href={`#${to}`} className="hover:underline">
      {children}
    </a>
  );
}
