import { Injectable } from "@angular/core";

import { Action } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  createReviewFailed,
  createReviewSuccess,
  deleteReviewFailed,
  deleteReviewSuccess,
  getReviews,
  getReviewsFailed,
  getReviewsSuccess,
  ReviewsActions,
  updateReviewFailed,
  updateReviewSuccess
} from "../actions/reviews.actions";

import { catchError, from, map, Observable, of, switchMap } from "rxjs";

import { ReviewsApiService } from "../../services/reviews-api.service";

import { Data, Id, Pagination } from "../../../../utils/interfaces/app.interfaces";
import { Review } from "../../components/reviews/utils/interfaces/reviews.interfaces";

import { PAGE_INDEX_0, PAGE_SIZE_20 } from "../../../../utils/consts/pagination.consts";

@Injectable()
export class ReviewsEffects {
  constructor(
    private actions$: Actions,
    private reviewService: ReviewsApiService,
  ) { }

  public getReviews$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ReviewsActions.GET_REVIEWS,
      ),
      switchMap(({ type, id, ...paginationData }: Pagination & Id & Action) =>
        this.reviewService.getReviewsList(id, paginationData)
          .pipe(
            map((data: Data<Review[]>) => getReviewsSuccess(data)),
            catchError(() => of(getReviewsFailed()))
          )
      )
    )
  );

  public createReview$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ReviewsActions.CREATE_REVIEW,
      ),
      switchMap(({ type, ...review }: Review & Action) =>
        this.reviewService.createReview(review)
          .pipe(
            switchMap((data: Review) =>
              from([
                createReviewSuccess(data),
                getReviews({ id: data?.productId!, size: PAGE_SIZE_20, page: PAGE_INDEX_0 })
              ])
            ),
            catchError(() => of(createReviewFailed()))
          )
      )
    )
  );

  public updateReview$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ReviewsActions.UPDATE_REVIEW,
      ),
      switchMap(({ type, ...review }: Review & Action) =>
        this.reviewService.updateReview(review)
          .pipe(
            map((data: Review) => updateReviewSuccess(data)),
            catchError(() => of(updateReviewFailed()))
          )
      )
    )
  );

  public deleteReview$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ReviewsActions.DELETE_REVIEW,
      ),
      switchMap(({ id }: Id & Action) =>
        this.reviewService.deleteReview(id)
          .pipe(
            map((data: Review) => deleteReviewSuccess(data)),
            catchError(() => of(deleteReviewFailed()))
          )
      )
    )
  );
}
