import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  title: string;
  cardId: string;
}
export interface TaskState {
  value: Task[];
}

const initialState: TaskState = {
  value: [
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-2b0d7b3dcb6d',
      title: 'New Task',
      cardId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    },
  ],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Task>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.id !== action.payload);
    },
    move: (
      state,
      action: PayloadAction<{ taskId: string; cardId: string }>,
    ) => {
      const task = state.value.find(
        (task) => task.id === action.payload.taskId,
      );
      if (task) {
        task.cardId = action.payload.cardId;
      }
    },
  },
});

export const { add, remove } = taskSlice.actions;

export default taskSlice.reducer;
