import { Action, createReducer, on } from "@ngrx/store";
import { decreaseSpinner, increaseSpinner } from "../actions/app.actions";

import { App } from "../../utils/interfaces/app.interfaces";

const initialState: App = {
  spinner: false,
};

export const appReducerImplicit = createReducer(
  initialState,
  on(increaseSpinner, (state: App) =>
    ({ ...state, spinner: true })),
  on(decreaseSpinner, (state: App) =>
    ({ ...state, spinner: false })),
);

export function appReducer(state: any, action: Action) {
  return appReducerImplicit(state, action);
}
