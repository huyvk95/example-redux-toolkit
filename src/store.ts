import { configureStore } from "@reduxjs/toolkit";
import {
  countSlice,
  displaySlice,
  COUNT_KEY,
  DISPLAY_KEY,
  CountState,
  DisplayState,
} from "./reducer";

export type RootState = {
  count: CountState;
  display: DisplayState;
};

const store = configureStore<RootState>({
  reducer: {
    [COUNT_KEY]: countSlice.reducer,
    [DISPLAY_KEY]: displaySlice.reducer,
  },
});

export default store;
