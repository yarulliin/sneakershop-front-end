import { createSelector } from "@ngrx/store";
import { catalogSelector } from "../../../../store/selectors/app.selectors";

import { Catalog } from "../../utils/interfaces/catalog.interfaces";

export const catalogList = createSelector(
  catalogSelector,
  ({ items }: Catalog) => items
);

export const catalogItem = createSelector(
  catalogSelector,
  ({ currentItem }: Catalog) => currentItem
);
