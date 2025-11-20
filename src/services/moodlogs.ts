import { api } from '../api/client';
import { MoodLog } from '../types/mood';

export interface CreateMoodLogPayload {
  userId: number;
  score: number;
  note?: string;
  stressScore?: number;
  loggedAt?: string;
}

export const MoodLogsService = {
  list: () => api.get<MoodLog[]>('/v1/mood-logs'),

  create: (data: CreateMoodLogPayload) =>
    api.post<MoodLog>('/v1/mood-logs', data),

  remove: (id: number) => api.del(`/v1/mood-logs/${id}`),
};
