import { createSlice } from '@reduxjs/toolkit';
import { ApiProps } from '../../types/types';

interface DataState {
  search: string;
  response: ApiProps;
  number: number;
  isLoadingMain: boolean;
}

const initialState: DataState = {
  search: '',
  response: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  number: 10,
  isLoadingMain: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateSearch(state, action) {
      state.search = action.payload;
    },
    updateResponse(state, action) {
      state.response = action.payload;
    },
    updateLoading(state) {
      state.isLoadingMain = !state.isLoadingMain;
    },
    updateNumber(state, action) {
      state.number = action.payload;
    },
  },
});

export const { updateSearch, updateLoading, updateNumber, updateResponse } =
  dataSlice.actions;

export default dataSlice.reducer;