import { configureStore } from "@reduxjs/toolkit";
import {
  counterSlice,
  displaySlice,
  CountState,
  DisplayState,
} from "./reducer";

export type StoreType = {
  count: CountState;
  display: DisplayState;
};

const store = configureStore<StoreType>({
  reducer: {
    count: counterSlice.reducer,
    display: displaySlice.reducer,
  },
});

export default store;
