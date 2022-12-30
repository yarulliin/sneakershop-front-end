import { Action, createReducer, on } from "@ngrx/store";
import { Catalog, CatalogItem } from "../../utils/interfaces/catalog.interfaces";
import { getCatalogItemSuccess, getCatalogListSuccess } from "../actions/catalog.actions";
import { Data } from "../../../../utils/interfaces/app.interfaces";

const initialState: Catalog = {
  items: {} as Data<CatalogItem[]>,
  currentItem: {} as CatalogItem,
};

export const catalogReducerImplicit = createReducer(
  initialState,
  on(getCatalogListSuccess, (state, data: Data<CatalogItem[]>) => ({
    ...state,
    items: data,
  })),
  on(getCatalogItemSuccess, (state, currentItem: CatalogItem) => ({
    ...state,
    currentItem,
  })),
);

export function catalogReducer(state: any, action: Action) {
  return catalogReducerImplicit(state, action);
}
