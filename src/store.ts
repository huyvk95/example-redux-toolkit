import { configureStore } from "@reduxjs/toolkit";
import { countSlice, displaySlice, CountState, DisplayState } from "./reducer";

export type RootState = {
  count: CountState;
  display: DisplayState;
};

const store = configureStore<RootState>({
  reducer: {
    count: countSlice.reducer,
    display: displaySlice.reducer,
  },
});

export default store;
