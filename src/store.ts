import { configureStore } from "@reduxjs/toolkit";
import {
  countReducer,
  CountState,
  displayReducer,
  DisplayState,
} from "./reducer";

export type StoreType = {
  count: CountState;
  display: DisplayState;
};

const store = configureStore<StoreType>({
  reducer: {
    count: countReducer,
    display: displayReducer,
  },
});

export default store;
