import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface StatusCard {
  id: string;
  title: string;
}
export interface CardState {
  value: StatusCard[];
}

const initialState: CardState = {
  value: [
    { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', title: 'New' },
    { id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', title: 'In Progress' },
    { id: '109156be-c4fb-41ea-b1b4-efe1671c5836', title: 'Done' },
  ],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<StatusCard>) => {
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((card) => card.id !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;

export default cardSlice.reducer;
