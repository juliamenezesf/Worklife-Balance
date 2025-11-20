export interface Task {
  id: number;
  userId: number;
  title: string;
  description?: string;
  status?: 'OPEN' | 'DONE';
  createdAt?: string;
}
