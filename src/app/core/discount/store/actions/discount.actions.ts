import { createAction, props } from "@ngrx/store";

import { Data, Name, Pagination } from "../../../../utils/interfaces/app.interfaces";
import { Discount } from "../../utils/interfaces/discount.interfaces";

export enum DiscountActions {
  GET_DISCOUNTS = '[DISCOUNT] GET_DISCOUNTS',
  GET_DISCOUNTS_SUCCESS = '[DISCOUNT] GET_DISCOUNTS_SUCCESS',
  GET_DISCOUNTS_FAILED = '[DISCOUNT] GET_DISCOUNTS_FAILED',

  GET_DISCOUNT = '[DISCOUNT] GET_DISCOUNT',
  GET_DISCOUNT_SUCCESS = '[DISCOUNT] GET_DISCOUNT_SUCCESS',
  GET_DISCOUNT_FAILED = '[DISCOUNT] GET_DISCOUNT_FAILED',

  CREATE_DISCOUNT = '[DISCOUNT] CREATE_DISCOUNT',
  CREATE_DISCOUNT_SUCCESS = '[DISCOUNT] CREATE_DISCOUNT_SUCCESS',
  CREATE_DISCOUNT_FAILED = '[DISCOUNT] CREATE_DISCOUNT_FAILED',

  UPDATE_DISCOUNT = '[DISCOUNT] UPDATE_DISCOUNT',
  UPDATE_DISCOUNT_SUCCESS = '[DISCOUNT] UPDATE_DISCOUNT_SUCCESS',
  UPDATE_DISCOUNT_FAILED = '[DISCOUNT] UPDATE_DISCOUNT_FAILED',

  DELETE_DISCOUNT = '[DISCOUNT] DELETE_DISCOUNT',
  DELETE_DISCOUNT_SUCCESS = '[DISCOUNT] DELETE_DISCOUNT_SUCCESS',
  DELETE_DISCOUNT_FAILED = '[DISCOUNT] DELETE_DISCOUNT_FAILED',
}

export const getDiscounts = createAction(
  DiscountActions.GET_DISCOUNTS,
  props<Pagination>(),
);

export const getDiscountsSuccess = createAction(
  DiscountActions.GET_DISCOUNTS_SUCCESS,
  props<Data<Discount[]>>(),
);

export const getDiscountsFailed = createAction(
  DiscountActions.GET_DISCOUNTS_FAILED,
);

export const getDiscount = createAction(
  DiscountActions.GET_DISCOUNT,
  props<Name>(),
);

export const getDiscountSuccess = createAction(
  DiscountActions.GET_DISCOUNT_SUCCESS,
  props<Discount>(),
);

export const getDiscountFailed = createAction(
  DiscountActions.GET_DISCOUNT_FAILED,
);

export const createDiscount = createAction(
  DiscountActions.CREATE_DISCOUNT,
  props<Discount>(),
);

export const createDiscountSuccess = createAction(
  DiscountActions.CREATE_DISCOUNT_SUCCESS,
  props<Pagination>(),
);

export const createDiscountFailed = createAction(
  DiscountActions.CREATE_DISCOUNT_FAILED,
);

export const updateDiscount = createAction(
  DiscountActions.UPDATE_DISCOUNT,
  props<Discount>(),
);

export const updateDiscountSuccess = createAction(
  DiscountActions.UPDATE_DISCOUNT_SUCCESS,
  props<Pagination & Name>(),
);

export const updateDiscountFailed = createAction(
  DiscountActions.UPDATE_DISCOUNT_FAILED,
);

export const deleteDiscount = createAction(
  DiscountActions.DELETE_DISCOUNT,
  props<Name>(),
);

export const deleteDiscountSuccess = createAction(
  DiscountActions.DELETE_DISCOUNT_SUCCESS,
  props<Pagination>(),
);

export const deleteDiscountFailed = createAction(
  DiscountActions.DELETE_DISCOUNT_FAILED,
);
