import { createAction, createReducer } from "@reduxjs/toolkit";

export const increasement = createAction("increasement");
export const decreasement = createAction("decreasement");

export type CountState = {
  count: number;
};

const initialStateCount: CountState = { count: 0 };

export const countReducer = createReducer(initialStateCount, {
  [increasement.type]: (state) => ({ count: state.count + 1 }),
  [decreasement.type]: (state) => ({ count: state.count - 1 }),
});

/*******************************************************************/

export const show = createAction("show");
export const hide = createAction("hide");

export type DisplayState = {
  isShow: boolean;
};

const initialStateDisplay: DisplayState = { isShow: true };

export const displayReducer = createReducer(initialStateDisplay, {
  [show.type]: (state) => ({ isShow: true }),
  [hide.type]: (state) => ({ isShow: false }),
});
