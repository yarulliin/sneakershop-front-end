import { createAction, props } from "@ngrx/store";

import { CatalogItem } from "../../utils/interfaces/catalog.interfaces";
import { Data, Id, Pagination } from "../../../../utils/interfaces/app.interfaces";

export enum CatalogActions {
  GET_CATALOG_LIST = '[CATALOG] GET_CATALOG_LIST',
  GET_CATALOG_LIST_SUCCESS = '[CATALOG] GET_CATALOG_LIST_SUCCESS',
  GET_CATALOG_LIST_FAILED = '[CATALOG] GET_CATALOG_LIST_FAILED',

  GET_CATALOG_ITEM = '[CATALOG] GET_CATALOG_ITEM',
  GET_CATALOG_ITEM_SUCCESS = '[CATALOG] GET_CATALOG_ITEM_SUCCESS',
  GET_CATALOG_ITEM_FAILED = '[CATALOG] GET_CATALOG_ITEM_FAILED',

  CREATE_CATALOG_ITEM = '[CATALOG] CREATE_CATALOG_ITEM',
  CREATE_CATALOG_ITEM_SUCCESS = '[CATALOG] CREATE_CATALOG_ITEM_SUCCESS',

  UPDATE_CATALOG_ITEM = '[CATALOG] UPDATE_CATALOG_ITEM',
  UPDATE_CATALOG_ITEM_SUCCESS = '[CATALOG] UPDATE_CATALOG_ITEM_SUCCESS',

  DELETE_CATALOG_ITEM = '[CATALOG] DELETE_CATALOG_ITEM',
  DELETE_CATALOG_ITEM_SUCCESS = '[CATALOG] DELETE_CATALOG_ITEM_SUCCESS',
}

export const getCatalogList = createAction(
  CatalogActions.GET_CATALOG_LIST,
  props<Pagination>(),
);

export const getCatalogListSuccess = createAction(
  CatalogActions.GET_CATALOG_LIST_SUCCESS,
  props<Data<CatalogItem[]>>(),
);

export const getCatalogListFailed = createAction(
  CatalogActions.GET_CATALOG_LIST_FAILED,
);

export const getCatalogItem = createAction(
  CatalogActions.GET_CATALOG_ITEM,
  props<Id>(),
);

export const getCatalogItemSuccess = createAction(
  CatalogActions.GET_CATALOG_ITEM_SUCCESS,
  props<CatalogItem>(),
);

export const getCatalogItemFailed = createAction(
  CatalogActions.GET_CATALOG_ITEM_FAILED,
);

export const createCatalogItem = createAction(
  CatalogActions.CREATE_CATALOG_ITEM,
  props<CatalogItem>(),
);

export const createCatalogItemSuccess = createAction(
  CatalogActions.CREATE_CATALOG_ITEM_SUCCESS,
);

export const updateCatalogItem = createAction(
  CatalogActions.UPDATE_CATALOG_ITEM,
  props<CatalogItem>(),
);

export const updateCatalogItemSuccess = createAction(
  CatalogActions.UPDATE_CATALOG_ITEM_SUCCESS,
);

export const deleteCatalogItem = createAction(
  CatalogActions.DELETE_CATALOG_ITEM,
  props<Id>(),
);

export const deleteCatalogItemSuccess = createAction(
  CatalogActions.DELETE_CATALOG_ITEM_SUCCESS,
);
