import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counter from '@/shared/Counter/model/reducer';

const rootReducer = combineReducers({
  counter: counter,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
