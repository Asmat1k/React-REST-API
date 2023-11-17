import { createSlice } from '@reduxjs/toolkit';
import { ApiProps } from '../../types/types';

interface DataState {
  response: ApiProps;
  number: number;
  isLoading: boolean;
}

const initialState: DataState = {
  response: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  number: 10,
  isLoading: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { updateLoading } = dataSlice.actions;

export default dataSlice.reducer;
