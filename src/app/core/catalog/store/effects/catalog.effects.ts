import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { showAlert } from "../../../../store/actions/app.actions";
import {
  CatalogActions,
  createCatalogItemSuccess,
  deleteCatalogItemSuccess,
  getCatalogItemFailed,
  getCatalogItemSuccess,
  getCatalogListFailed,
  getCatalogListSuccess,
  updateCatalogItemSuccess,
} from "../actions/catalog.actions";

import { catchError, map, Observable, of, switchMap } from "rxjs";

import { TuiNotification } from "@taiga-ui/core";

import { CatalogApiService } from "../../services/catalog-api.service";

import { CatalogItem } from "../../utils/interfaces/catalog.interfaces";
import { Data, Id, Pagination } from "../../../../utils/interfaces/app.interfaces";

@Injectable()
export class CatalogEffects {
  constructor(
    private actions$: Actions,
    private catalogService: CatalogApiService,
  ) { }

  public getCatalogList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CatalogActions.GET_CATALOG_LIST,
      ),
      switchMap(({ type, ...paginationData }: Pagination & Action) =>
        this.catalogService.getCatalogList(paginationData)
        .pipe(
          map((data: Data<CatalogItem[]>) => getCatalogListSuccess(data)),
          catchError(() => of(getCatalogListFailed()))
        )
      )
    )
  );

  public getCatalogItem$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogActions.GET_CATALOG_ITEM),
      switchMap(({ id }: Id) => this.catalogService.getCatalogItem(id)
        .pipe(
          map((data: CatalogItem) => getCatalogItemSuccess(data)),
          catchError(() => of(getCatalogItemFailed()))
        )
      )
    )
  );

  public createCatalogItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogActions.CREATE_CATALOG_ITEM),
      switchMap(({ type, ...data }: CatalogItem & Action) => this.catalogService.createCatalogItem(data)
        .pipe(
          map(() => createCatalogItemSuccess()),
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

  public updateCatalogItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogActions.UPDATE_CATALOG_ITEM),
      switchMap(({ type, ...data }: CatalogItem & Action) => this.catalogService.updateCatalogItem(data)
        .pipe(
          map(() => updateCatalogItemSuccess()),
          catchError((error: HttpErrorResponse) =>
            of(showAlert({
              label: 'Error',
              text: error?.error?.message || error?.message,
              status: TuiNotification.Error
            }))
          )
        )
      )
    ),
  );

  public deleteCatalogItem: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(CatalogActions.DELETE_CATALOG_ITEM),
      switchMap(({ id }: Id) => this.catalogService.deleteCatalogItem(id)
        .pipe(
          map(() => deleteCatalogItemSuccess()),
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
}
