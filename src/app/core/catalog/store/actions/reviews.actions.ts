import { createAction, props } from "@ngrx/store";

import { Data, Id, Pagination } from "../../../../utils/interfaces/app.interfaces";
import { Review } from "../../components/reviews/utils/interfaces/reviews.interfaces";

export enum ReviewsActions {
  GET_REVIEWS = '[REVIEWS] GET_REVIEWS',
  GET_REVIEWS_SUCCESS = '[REVIEWS] GET_REVIEWS_SUCCESS',
  GET_REVIEWS_FAILED = '[REVIEWS] GET_REVIEWS_FAILED',

  CREATE_REVIEW = '[REVIEWS] CREATE_REVIEW',
  CREATE_REVIEW_SUCCESS = '[REVIEWS] CREATE_REVIEW_SUCCESS',
  CREATE_REVIEW_FAILED = '[REVIEWS] CREATE_REVIEW_FAILED',

  UPDATE_REVIEW = '[REVIEWS] UPDATE_REVIEW',
  UPDATE_REVIEW_SUCCESS = '[REVIEWS] UPDATE_REVIEW_SUCCESS',
  UPDATE_REVIEW_FAILED = '[REVIEWS] UPDATE_REVIEW_FAILED',

  DELETE_REVIEW = '[REVIEWS] DELETE_REVIEW',
  DELETE_REVIEW_SUCCESS = '[REVIEWS] DELETE_REVIEW_SUCCESS',
  DELETE_REVIEW_FAILED = '[REVIEWS] DELETE_REVIEW_FAILED',
}

export const getReviews = createAction(
  ReviewsActions.GET_REVIEWS,
  props<Pagination & Id>(),
);

export const getReviewsSuccess = createAction(
  ReviewsActions.GET_REVIEWS_SUCCESS,
  props<Data<Review[]>>(),
);

export const getReviewsFailed = createAction(
  ReviewsActions.GET_REVIEWS_FAILED,
);

export const createReview = createAction(
  ReviewsActions.CREATE_REVIEW,
  props<Review>(),
);

export const createReviewSuccess = createAction(
  ReviewsActions.CREATE_REVIEW_SUCCESS,
  props<Review>(),
);

export const createReviewFailed = createAction(
  ReviewsActions.CREATE_REVIEW_FAILED,
);

export const updateReview = createAction(
  ReviewsActions.UPDATE_REVIEW,
  props<Review>(),
);

export const updateReviewSuccess = createAction(
  ReviewsActions.UPDATE_REVIEW_SUCCESS,
  props<Review>(),
);

export const updateReviewFailed = createAction(
  ReviewsActions.UPDATE_REVIEW_FAILED,
);

export const deleteReview = createAction(
  ReviewsActions.DELETE_REVIEW,
  props<Id>(),
);

export const deleteReviewSuccess = createAction(
  ReviewsActions.DELETE_REVIEW_SUCCESS,
  props<Review>(),
);

export const deleteReviewFailed = createAction(
  ReviewsActions.DELETE_REVIEW_FAILED,
);
