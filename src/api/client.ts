const BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || '';

console.log('BASE_URL =>', BASE_URL);

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers ?? {}),
    },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw new Error(text || `Erro HTTP ${response.status}`);
  }

  // Verifica se a resposta tem JSON
  const contentType = response.headers.get('Content-Type') || '';

  // Se não tiver JSON, retorna null
  if (!contentType.includes('application/json')) {
    return null as T;
  }

  // Lê o texto da resposta
  const text = await response.text();

  // Se vazio, retorna null
  if (!text) {
    return null as T;
  }

  // Se tiver JSON, faz o parse
  return JSON.parse(text) as T;
}

export const api = {
  get: <T>(path: string) => request<T>(path),

  post: <T>(path: string, body: unknown) =>
    request<T>(path, {
      method: 'POST',
      body: JSON.stringify(body),
    }),

  del: (path: string) =>
    request<void>(path, {
      method: 'DELETE',
    }),
};
