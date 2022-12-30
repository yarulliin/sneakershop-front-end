import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { reviewsList } from "../store/selectors/reviews.selectors";
import { createReview, deleteReview, getReviews, updateReview } from "../store/actions/reviews.actions";

import { filter, Observable } from "rxjs";

import { AppState } from "../../../utils/interfaces/store.interfaces";
import { Review } from "../components/reviews/utils/interfaces/reviews.interfaces";
import { Data, Id, Pagination } from "../../../utils/interfaces/app.interfaces";

@Injectable()
export class ReviewsFacadeService {
  public get reviewsList$(): Observable<Data<Review[]>> {
    return this.store.select(reviewsList)
      .pipe(filter<Data<Review[]>>(Boolean));
  }
  constructor(private store: Store<AppState>) { }

  public getReviews(id: string, pagination: Pagination): void {
    this.store.dispatch(getReviews({ id, ...pagination }));
  }

  public createReview(review: Review): void {
    this.store.dispatch(createReview(review));
  }

  public updateReview(review: Review): void {
    this.store.dispatch(updateReview(review));
  }

  public deleteReview(id: Id): void {
    this.store.dispatch(deleteReview(id));
  }
}
