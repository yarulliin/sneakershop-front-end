import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Action } from "@ngrx/store";
import {
  AppActions,
  loginFailed,
  loginSuccess,
  logoutFailed,
  logoutSuccess,
  registerFailed,
  registerSuccess,
  showAlertFailed,
  showAlertSuccess,
} from "../actions/app.actions";

import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { TuiAlertService } from "@taiga-ui/core";

import { AppService } from "../../services/app.service";

import { Login, Register, AuthUserData } from "../../utils/interfaces/app.interfaces";
import { CatalogAlert } from "../../utils/interfaces/alert.interfaces";

import { ROUTE_CONFIG } from "../../utils/consts/app.consts";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private appService: AppService,
    private router: Router,
    @Inject(TuiAlertService)
    private alertService: TuiAlertService,
  ) { }

  public login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.LOGIN),
      switchMap((credentials: Login) =>
        this.appService.login(credentials)
          .pipe(
            tap((user: AuthUserData) => {
              localStorage.setItem('user', JSON.stringify(user))
              this.router.navigate([ROUTE_CONFIG.catalog.path])
            }),
            map((tokenInfo: AuthUserData) => loginSuccess(tokenInfo)),
            catchError(() => of(loginFailed())),
          )
      )
    )
  );

  public logout$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.LOGOUT),
      tap(() => {
        localStorage.removeItem('user')
        this.router.navigate([ROUTE_CONFIG.login.path])
      }),
      switchMap(() => of(logoutSuccess())),
      catchError(() => of(logoutFailed())),
    )
  );

  public register$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.REGISTER),
      switchMap((credentials: Register) =>
        this.appService.register(credentials)
          .pipe(
            tap(() => this.router.navigate([ROUTE_CONFIG.login.path])),
            map(() => registerSuccess()),
            catchError(() => of(registerFailed())),
          )
      )
    )
  );

  public showAlert$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.SHOW_ALERT),
      switchMap((data: CatalogAlert) =>
        this.alertService.open(data?.text || ``, {
          label: data?.label,
          status: data?.status,
        }).pipe(
          map(() => showAlertSuccess()),
          catchError(() => of(showAlertFailed())),
        )
      )
    )
  );
}
