import { api } from '../api/client';
import { Task } from '../types/task';

export const TasksService = {
  list: () => api.get<Task[]>('/v1/tasks'),

  create: (task: Omit<Task, 'id'>) =>
    api.post<Task>('/v1/tasks', task),

  remove: (id: number) =>
    api.del(`/v1/tasks/${id}`),
};
