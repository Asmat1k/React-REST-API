import { createContext } from 'react';
import { ApiProps } from './types/types';

interface DefaultValue {
  data: {
    response: ApiProps;
    isLoading: boolean;
  };
  updateLoadingState(): void;
  updateDataState(json: ApiProps | void): void;
}

const Context = createContext<DefaultValue>({
  data: {
    response: {
      count: 0,
      next: '',
      previous: '',
      results: [],
    },
    isLoading: false,
  },
  updateLoadingState() {},
  updateDataState() {},
});

export default Context;
