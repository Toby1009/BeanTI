import { questions, scoreAnswers } from './coffee';
export const STORAGE_KEY = 'beanti-passport-v1';
export type SavedQuiz = { version: 1; answers: (number | null)[]; step: number; completed: boolean };
export function parseSaved(raw: string | null): SavedQuiz | null {
  if (!raw) return null;
  try { const s = JSON.parse(raw); if (s.version !== 1 || !Array.isArray(s.answers) || s.answers.length !== questions.length || !s.answers.every((a: unknown,i: number) => a === null || (Number.isInteger(a) && typeof a === 'number' && a >= 0 && a < questions[i].options.length)) || !Number.isInteger(s.step) || s.step < 0 || s.step >= questions.length || typeof s.completed !== 'boolean' || (s.completed && s.answers.includes(null)) || s.answers.slice(0,s.step).includes(null)) return null; return s; } catch {return null;}
}
export function savedResult(code: string) { try {const s=parseSaved(localStorage.getItem(STORAGE_KEY));if(s?.completed){const result=scoreAnswers(s.answers as number[]);if(result.code===code)return result;} }catch{} return null; }
