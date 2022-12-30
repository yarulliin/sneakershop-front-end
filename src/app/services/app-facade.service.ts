import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { spinnerSelector, userSelector } from "../store/selectors/app.selectors";
import { decreaseSpinner, increaseSpinner, login, logout, register } from "../store/actions/app.actions";

import { Observable } from "rxjs";

import { AppState } from "../utils/interfaces/store.interfaces";
import { Register, AuthUserData, Login } from "../utils/interfaces/app.interfaces";

@Injectable()
export class AppFacadeService {
  public get isLoaderActive$(): Observable<boolean> {
    return this.store.select(spinnerSelector);
  }

  public get userInfo$(): Observable<AuthUserData> {
    return this.store.select(userSelector);
  }

  constructor(private store: Store<AppState>) { }

  public login(credentials: Login): void {
    this.store.dispatch(login(credentials));
  }

  public logout(): void {
    this.store.dispatch(logout());
  }

  public register(credentials: Register): void {
    this.store.dispatch(register(credentials));
  }

  public increaseSpinner(): void {
    this.store.dispatch(increaseSpinner());
  }

  public decreaseSpinner(): void {
    this.store.dispatch(decreaseSpinner());
  }
}
