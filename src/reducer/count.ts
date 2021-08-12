import {
  createSelector,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "../store";
import { slice as displaySlice } from "./display";

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
  extraReducers: (builder) => {
    builder
      .addCase(displaySlice.actions.hide, (state, action) => {
        state.count = 0;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const getCountSelector = createSelector<RootState, State, number>(
  (state) => state.count,
  (res) => res.count
);
