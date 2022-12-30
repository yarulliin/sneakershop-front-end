import { Action, createReducer, on } from "@ngrx/store";
import { loginSuccess, logoutSuccess } from "../actions/app.actions";

import { AuthUserData } from "../../utils/interfaces/app.interfaces";

const initialState: AuthUserData = {
  id: '',
  token: '',
  name: '',
};

export const userReducerImplicit = createReducer(
  initialState,
  on(loginSuccess, (state: AuthUserData, data: AuthUserData) =>
    ({ ...state, ...data })),
  on(logoutSuccess, () =>
    ({ ...initialState })),
);

export function userReducer(state: any, action: Action) {
  return userReducerImplicit(state, action);
}
