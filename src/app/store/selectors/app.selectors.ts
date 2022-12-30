import { AppState } from "../../utils/interfaces/store.interfaces";
import { createSelector } from "@ngrx/store";
import { App } from "../../utils/interfaces/app.interfaces";

export const userSelector = ({ user }: AppState) => user;

export const appSelector = ({ app }: AppState) => app;
export const spinnerSelector = createSelector(
  appSelector,
  (app: App) => app?.spinner);

export const catalogSelector = ({ catalog }: AppState) => catalog;

export const reviewsSelector = ({ reviews }: AppState) => reviews;
