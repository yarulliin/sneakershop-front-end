import { createSelector } from "@ngrx/store";
import { reviewsSelector } from "../../../../store/selectors/app.selectors";

import { Reviews } from "../../components/reviews/utils/interfaces/reviews.interfaces";

export const reviewsList = createSelector(
  reviewsSelector,
  ({ reviewsList }: Reviews) => reviewsList
);
