import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Pagination } from "../../../utils/interfaces/app.interfaces";
import { Discount } from "../utils/interfaces/discount.interfaces";

import { urls } from "../../../utils/consts/urls";

import { createHttpParams } from "../../../utils/functions/app.functions";

const { discount, discountWithParam } = urls;

@Injectable()
export class DiscountService {
  constructor(private http: HttpClient) { }

  public getDiscounts(pagination: Pagination): Observable<Discount[]> {
    const params = createHttpParams({ ...pagination });

    return this.http.get<Discount[]>(discount, { params });
  }

  public getDiscountByName(name: string): Observable<Discount> {
    return this.http.get<Discount>(discountWithParam(name));
  }

  public createDiscount(discountData: Discount): Observable<Discount> {
    return this.http.post<Discount>(discount, discountData);
  }

  public updateDiscount(discountData: Discount): Observable<Discount> {
    return this.http.put<Discount>(discountWithParam(discountData?._id!), discountData);
  }

  public deleteDiscount(name: string): Observable<Discount> {
    return this.http.delete<Discount>(discountWithParam(name));
  }
}
