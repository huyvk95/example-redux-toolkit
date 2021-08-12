import {
  createSelector,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export type State = {
  count: number;
};

export type Reducer = {
  increasement: (state: State) => State;
  decreasement: (state: State) => State;
} & SliceCaseReducers<State>;

export const slice = createSlice<State, Reducer>({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increasement: (state) => ({ count: state.count + 1 }),
    decreasement: (state) => ({ count: state.count - 1 }),
  },
});

export const getCountSelector = createSelector<RootState, State, number>(
  (state) => state.count,
  (res) => res.count
);
