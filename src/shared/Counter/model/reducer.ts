import {
  createAction,
  createReducer,
  ActionReducerMapBuilder,
} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder.addCase(increment, (state) => {
      state.count += 1;
    });
    builder.addCase(decrement, (state) => {
      state.count -= 1;
    });
  }
);
