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
    updateResponse(state, action) {
      state.response = action.payload;
    },
    updateLoading(state) {
      state.isLoading = !state.isLoading;
    },
    updateNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { updateLoading, updateNumber, updateResponse } =
  dataSlice.actions;

export default dataSlice.reducer;
