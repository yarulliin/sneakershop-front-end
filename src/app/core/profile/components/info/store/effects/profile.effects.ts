import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  createUserSuccess,
  deleteUserSuccess,
  getOrdersSuccess,
  getUserSuccess,
  ProfileActions,
  updateUserSuccess
} from "../actions/profile.actions";
import { showAlert } from "../../../../../../store/actions/app.actions";

import { TuiNotification } from "@taiga-ui/core";

import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { ProfileService } from "../../services/profile.service";
import { CartApiService } from "../../../../services/cart-api.service";
import { LocalStorageService } from "../../../../../../utils/services/local-storage.service";
import { SessionStorageService } from "../../../../../../utils/services/session-storage.service";

import { AuthUserData, Id } from "../../../../../../utils/interfaces/app.interfaces";
import { CreateUser, Order, User } from "../../utils/interfaces/profile-info.interfaces";
import { ROUTE_CONFIG } from "../../../../../../utils/consts/app.consts";
import { RoutePaths } from "../../../../../../utils/enums/app.enum";

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private cartService: CartApiService,
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService,
    private router: Router,
  ) { }

  public getUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.GET_USER),
      switchMap(({ id }: Id) => this.profileService.getUser(id)
        .pipe(
          map((profile: User) => getUserSuccess(profile)),
          catchError((error: HttpErrorResponse) =>
            of(showAlert({
              label: 'Error',
              text: error?.error?.message || error?.message,
              status: TuiNotification.Error
            }))
          )
        )
      )
    )
  );

  public createUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.CREATE_USER),
      switchMap(({ type, ...data }: CreateUser & Action) => this.profileService.createUser(data)
        .pipe(
          map((profile: User) => createUserSuccess(profile)),
          catchError((error: HttpErrorResponse) =>
            of(showAlert({
              label: 'Error',
              text: error?.error?.message || error?.message,
              status: TuiNotification.Error
            }))
          )
        )
      )
    )
  );

  public updateUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.UPDATE_USER),
      switchMap(({ type, ...data }: User & Action) => this.profileService.updateUser(data)
        .pipe(
          map((profile: User) => updateUserSuccess(profile)),
          catchError((error: HttpErrorResponse) =>
            of(showAlert({
              label: 'Error',
              text: error?.error?.message || error?.message,
              status: TuiNotification.Error
            }))
          )
        )
      )
    )
  );

  public deleteUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.DELETE_USER),
      switchMap(({ id }: Id) => this.profileService.deleteUser(id)
        .pipe(
          map(() => deleteUserSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(showAlert({
              label: 'Error',
              text: error?.error?.message || error?.message,
              status: TuiNotification.Error
            }))
          )
        )
      )
    )
  );

  public getOrders$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ProfileActions.GET_ORDERS,
        ProfileActions.CREATE_USER_SUCCESS,
      ),
      map(() => this.localStorageService.getItem<AuthUserData>('user')),
      switchMap(({ id }: AuthUserData) => this.cartService.getOrders(id)
        .pipe(
          map((data: Order[]) => getOrdersSuccess({ data })),
        )
      )
    )
  );

  public createOrder$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.CREATE_ORDER),
      map((order: Order) => ({ ...order, userId: this.localStorageService.getItem<AuthUserData>('user')?.id })),
      switchMap((order: Order) => this.cartService.createOrder(order)
        .pipe(
          tap(() => {
            this.sessionStorageService.removeItem('cart');
            this.router.navigate([ROUTE_CONFIG.profile.path, order?.userId, RoutePaths.INFO])
          }),
          map(() => showAlert({
            label: 'Заказ принят',
            status: TuiNotification.Success
          })),
        )
      )
    )
  );
}
