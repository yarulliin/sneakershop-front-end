import { Action, createReducer, on } from "@ngrx/store";
import { getReviewsSuccess } from "../actions/reviews.actions";

import { Data } from "../../../../utils/interfaces/app.interfaces";
import { Review, Reviews } from "../../components/reviews/utils/interfaces/reviews.interfaces";

const initialState: Reviews = {
  reviewsList: {} as Data<Review[]>,
};

export const reviewsReducerImplicit = createReducer(
  initialState,
  on(getReviewsSuccess, (state, data: Data<Review[]>) => ({
    ...state,
    reviewsList: data,
  })),
);

export function reviewsReducer(state: any, action: Action) {
  return reviewsReducerImplicit(state, action);
}
