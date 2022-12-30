import { createAction, props } from "@ngrx/store";

import { Login, Register, AuthUserData } from "../../utils/interfaces/app.interfaces";
import { CatalogAlert } from "../../utils/interfaces/alert.interfaces";

export enum AppActions {
  LOGIN = '[APP] LOGIN',
  LOGIN_SUCCESS = '[APP] LOGIN_SUCCESS',
  LOGIN_FAILED = '[APP] LOGIN_FAILED',

  LOGOUT = '[APP] LOGOUT',
  LOGOUT_SUCCESS = '[APP] LOGOUT_SUCCESS',
  LOGOUT_FAILED = '[APP] LOGOUT_FAILED',

  REGISTER = '[APP] REGISTER',
  REGISTER_SUCCESS = '[APP] REGISTER_SUCCESS',
  REGISTER_FAILED = '[APP] REGISTER_FAILED',

  INCREASE_SPINNER = '[APP] INCREASE_SPINNER',
  DECREASE_SPINNER = '[APP] DECREASE_SPINNER',

  SHOW_ALERT = '[APP] SHOW_ALERT',
  SHOW_ALERT_SUCCESS = '[APP] SHOW_ALERT_SUCCESS',
  SHOW_ALERT_FAILED = '[APP] SHOW_ALERT_FAILED',
}

export const login = createAction(
  AppActions.LOGIN,
  props<Login>(),
);

export const loginSuccess = createAction(
  AppActions.LOGIN_SUCCESS,
  props<AuthUserData>(),
);

export const loginFailed = createAction(
  AppActions.LOGIN_FAILED,
);

export const logout = createAction(
  AppActions.LOGOUT,
);

export const logoutSuccess = createAction(
  AppActions.LOGOUT_SUCCESS,
);

export const logoutFailed = createAction(
  AppActions.LOGOUT_FAILED,
);

export const register = createAction(
  AppActions.REGISTER,
  props<Register>(),
);

export const registerSuccess = createAction(
  AppActions.REGISTER_SUCCESS,
);

export const registerFailed = createAction(
  AppActions.REGISTER_FAILED,
);

export const increaseSpinner = createAction(
  AppActions.INCREASE_SPINNER,
);

export const decreaseSpinner = createAction(
  AppActions.DECREASE_SPINNER,
);

export const showAlert = createAction(
  AppActions.SHOW_ALERT,
  props<CatalogAlert>(),
);

export const showAlertSuccess = createAction(
  AppActions.SHOW_ALERT_SUCCESS,
);

export const showAlertFailed = createAction(
  AppActions.SHOW_ALERT_FAILED,
);
