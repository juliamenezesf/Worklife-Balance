export interface MoodLog {
  id: number;
  userId: number;
  score: number;        
  note?: string;        
  stressScore?: number;
  loggedAt: string;   
}
