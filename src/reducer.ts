import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export type CountState = {
  count: number;
};

export type CountReducer = {
  increasement: (state: CountState) => CountState;
  decreasement: (state: CountState) => CountState;
} & SliceCaseReducers<CountState>;

export const counterSlice = createSlice<CountState, CountReducer>({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increasement: (state) => ({ count: state.count + 1 }),
    decreasement: (state) => ({ count: state.count - 1 }),
  },
});

/*******************************************************************/

export type DisplayState = {
  isShow: boolean;
};

export type DisplayReducer = {
  show: (state: DisplayState) => DisplayState;
  hide: (state: DisplayState) => DisplayState;
} & SliceCaseReducers<DisplayState>;

export const displaySlice = createSlice<DisplayState, DisplayReducer>({
  name: "display",
  initialState: { isShow: true },
  reducers: {
    show: (state) => ({ isShow: true }),
    hide: (state) => ({ isShow: false }),
  },
});
