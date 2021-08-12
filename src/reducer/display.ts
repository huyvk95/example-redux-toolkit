import {
  createSelector,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "../store";

export type State = {
  isShow: boolean;
};

export type Reducer = {
  show: (state: State) => State;
  hide: (state: State) => State;
} & SliceCaseReducers<State>;

export const slice = createSlice<State, Reducer>({
  name: "display",
  initialState: { isShow: true },
  reducers: {
    show: (state) => ({ isShow: true }),
    hide: (state) => ({ isShow: false }),
  },
});

export const getDisplaySelector = createSelector<RootState, State, boolean>(
  (state) => state.display,
  (res) => res.isShow
);
