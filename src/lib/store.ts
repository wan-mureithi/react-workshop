import {create} from 'zustand';
import { TaskType } from '../components/Task';

interface TaskBoxState {
    tasks: TaskType[];
    status: 'idle' | 'loading' | 'error';
    error: string | null;
    setTasks: (tasks: TaskType[]) => void;
    updateTaskState: (id: string, newTaskState: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED') => void;
  }

  const defaultTasks: TaskType[] = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];
 export const useTaskStore = create<TaskBoxState>((set) => ({
    tasks: defaultTasks,
    status: 'idle',
    error: null,
    setTasks: (tasks) => set({ tasks }),
    updateTaskState: (id, newTaskState) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, state: newTaskState } : task
        ),
      })),
  }));