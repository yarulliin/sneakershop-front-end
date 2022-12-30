import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Data, Pagination } from "../../../utils/interfaces/app.interfaces";
import { Review } from "../components/reviews/utils/interfaces/reviews.interfaces";

import { urls } from "../../../utils/consts/urls";

import { createHttpParams } from "../../../utils/functions/app.functions";

const { reviews, reviewWithParam } = urls;

@Injectable()
export class ReviewsApiService {
  constructor(private http: HttpClient) { }

  public getReviewsList(id: string, paginationData: Pagination): Observable<Data<Review[]>> {
    const params = createHttpParams({ ...paginationData });

    return this.http.get<Data<Review[]>>(reviewWithParam(id), { params });
  }

  public createReview(item: Review): Observable<Review> {
    return this.http.post<Review>(reviews, item);
  }

  public updateReview(item: Review): Observable<Review> {
    return this.http.put<Review>(reviewWithParam(item?._id!), item);
  }

  public deleteReview(id: string): Observable<Review> {
    return this.http.delete<Review>(reviewWithParam(id));
  }
}
