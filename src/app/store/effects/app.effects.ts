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

import { DiffieHellmanService } from '../../services/diffie-hellman.service';
import { Rc4Service } from '../../services/rc4.service';

@Injectable()
export class AppEffects {
  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService,
    private readonly actions$: Actions,
    private readonly appService: AppService,
    private readonly router: Router,
    private readonly diffieHellmanService: DiffieHellmanService,
    private readonly rc4Service: Rc4Service,
  ) { }

  // public login$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppActions.LOGIN),
  //     switchMap((credentials: Login) =>
  //       this.appService.login(credentials)
  //         .pipe(
  //           tap((user: AuthUserData) => {
  //             localStorage.setItem('user', JSON.stringify(user))
  //             this.router.navigate([ROUTE_CONFIG.catalog.path])
  //           }),
  //           map((tokenInfo: AuthUserData) => loginSuccess(tokenInfo)),
  //           catchError(() => of(loginFailed())),
  //         )
  //     )
  //   )
  // );

  // public login$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AppActions.LOGIN),
  //     switchMap(({ email, password }: Login) =>
  //       this.appService.challenge({ login: email })
  //         .pipe(
  //           switchMap(({ word }: { word: string }) => {
  //             const hashedPassword = MD5(`${ word }${ password }`).toString(enc.Base64);
  //
  //             return this.appService.checkPassword({ login: email, hashedPassword })
  //               .pipe(
  //                 tap((user: AuthUserData) => {
  //                   localStorage.setItem('user', JSON.stringify(user))
  //                   this.router.navigate([ROUTE_CONFIG.catalog.path])
  //                 }),
  //                 map((tokenInfo: AuthUserData) => loginSuccess(tokenInfo)),
  //                 catchError(() => of(loginFailed())),
  //               )
  //           }),
  //         )
  //     )
  //   )
  // );

  public login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.LOGIN),
      switchMap(({ email, password }: Login) =>
        this.appService.challenge({ login: email })
          .pipe(
            switchMap(({ p, g, A }: Record<string, number>) => {
              const b = this.diffieHellmanService.rnd(1000, 1000000);
              const B = this.diffieHellmanService.generateNumber(g, b, p);

              return this.appService.generateKey({ login: email, b: B })
                .pipe(
                  switchMap(() => {
                    const K = this.diffieHellmanService.generateNumber(A, b, p);
                    this.rc4Service.keySetup(`${K}`);
                    const hashedPassword = this.rc4Service.encrypt(`${K}${password}`);
                    // const decrypted = this.rc4Service.decrypt(test)
                    // console.log(test, this.rc4Service.encrypt(decrypted), this.rc4Service.decrypt(test));
                    // const hashedPassword = MD5(`${K}${password}`).toString(enc.Base64);

                    return this.appService.checkPassword({ login: email, password: hashedPassword })
                      .pipe(
                        tap((user: AuthUserData) => {
                          localStorage.setItem('user', JSON.stringify(user))
                          this.router.navigate([ROUTE_CONFIG.catalog.path])
                        }),
                        map((tokenInfo: AuthUserData) => loginSuccess(tokenInfo)),
                      )
                  }),
                  catchError(() => of(loginFailed())),
                )
            }),
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
