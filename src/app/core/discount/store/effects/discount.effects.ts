import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import {
  createDiscountFailed,
  createDiscountSuccess,
  deleteDiscountFailed,
  deleteDiscountSuccess,
  DiscountActions,
  getDiscountsFailed,
  getDiscountsSuccess,
  getDiscountSuccess,
  updateDiscountFailed,
  updateDiscountSuccess,
} from "../actions/discount.actions";
import { showAlert } from "../../../../store/actions/app.actions";

import { catchError, from, map, Observable, of, switchMap } from "rxjs";

import { TuiNotification } from "@taiga-ui/core";

import { DiscountService } from "../../services/discount.service";

import { Name, Pagination } from "../../../../utils/interfaces/app.interfaces";
import { Discount } from "../../utils/interfaces/discount.interfaces";

import { PAGE_INDEX_0, PAGE_SIZE_20 } from "../../../../utils/consts/pagination.consts";

import { getDiscountWarningLabel } from "../../utils/functions/discount.functions";

@Injectable()
export class DiscountEffects {
  constructor(
    private actions$: Actions,
    private discountService: DiscountService,
  ) { }

  public getDiscounts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        DiscountActions.GET_DISCOUNTS,
        DiscountActions.CREATE_DISCOUNT_SUCCESS,
        DiscountActions.UPDATE_DISCOUNT_SUCCESS,
        DiscountActions.DELETE_DISCOUNT_SUCCESS,
      ),
      switchMap(({ type, ...pagination }: Pagination & Action) =>
        this.discountService.getDiscounts(pagination)
          .pipe(
            map((data: Discount[]) => getDiscountsSuccess({ data })),
            catchError(() => of(getDiscountsFailed())),
          )
      )
    )
  );

  public getDiscount$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        DiscountActions.GET_DISCOUNT,
        DiscountActions.UPDATE_DISCOUNT_SUCCESS,
      ),
      switchMap(({ name }: Name & Action) =>
        this.discountService.getDiscountByName(name)
          .pipe(
            switchMap((data: Discount) => from([
              getDiscountSuccess(data),
              showAlert({ label: 'Промокод применен', status: TuiNotification.Success })
            ])),
            catchError((error: HttpErrorResponse) =>
              of(showAlert({ label: getDiscountWarningLabel(error), status: TuiNotification.Warning }))),
          )
      )
    )
  );

  public createDiscount$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(DiscountActions.CREATE_DISCOUNT),
      switchMap(({ type, ...discount }: Discount & Action) =>
        this.discountService.createDiscount(discount)
          .pipe(
            map(() => createDiscountSuccess({ page: PAGE_INDEX_0, size: PAGE_SIZE_20 })),
            catchError(() => of(createDiscountFailed())),
          )
      )
    )
  );

  public updateDiscount$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(DiscountActions.UPDATE_DISCOUNT),
      switchMap(({ type, ...discount }: Discount & Action) =>
        this.discountService.updateDiscount(discount)
          .pipe(
            map(() => updateDiscountSuccess({ name: discount?.discountName, page: PAGE_INDEX_0, size: PAGE_SIZE_20 })),
            catchError(() => of(updateDiscountFailed())),
          )
      )
    )
  );

  public deleteDiscount$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(DiscountActions.DELETE_DISCOUNT),
      switchMap(({ name }: Name & Action) =>
        this.discountService.deleteDiscount(name)
          .pipe(
            map(() => deleteDiscountSuccess({ page: PAGE_INDEX_0, size: PAGE_SIZE_20 })),
            catchError(() => of(deleteDiscountFailed())),
          )
      )
    )
  );
}
