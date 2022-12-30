import { Action, createReducer, on } from "@ngrx/store";

import { getDiscountsSuccess, getDiscountSuccess } from "../actions/discount.actions";

import { Discount, Discounts } from "../../utils/interfaces/discount.interfaces";
import { Data } from "../../../../utils/interfaces/app.interfaces";

const initialState: Discounts = {
  discounts: {} as Discount[],
  discount: {} as Discount,
};

export const discountsReducerImplicit = createReducer(
  initialState,
  on(getDiscountsSuccess, (state, { data }: Data<Discount[]>) => ({
    ...state,
    discounts: data,
  })),
  on(getDiscountSuccess, (state, discount: Discount) => ({
    ...state,
    discount,
  })),
);

export function discountsReducer(state: any, action: Action) {
  return discountsReducerImplicit(state, action);
}
