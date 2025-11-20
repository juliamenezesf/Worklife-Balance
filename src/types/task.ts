export interface Task {
  id: number;
  userId: number;
  title: string;

  description?: string;

  startAt?: string;
  endAt?: string;

  taskType?: 'FOCUS' | 'MEETING' | 'BREAK' | 'PERSONAL';
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
  status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
}
