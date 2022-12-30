import { AppState } from "../../../../utils/interfaces/store.interfaces";

import { createSelector } from "@ngrx/store";

import { Discounts } from "../../utils/interfaces/discount.interfaces";

export const selectDiscounts = ({ discounts }: AppState) => discounts;

export const selectDiscountsList = createSelector(
  selectDiscounts,
  ({ discounts }: Discounts) => discounts
);

export const selectCurrentDiscount = createSelector(
  selectDiscounts,
  ({ discount }: Discounts) => discount
);
