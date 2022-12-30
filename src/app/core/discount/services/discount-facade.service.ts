import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectCurrentDiscount, selectDiscountsList } from "../store/selectors/discounts.selectors";
import {
  createDiscount,
  deleteDiscount,
  getDiscount,
  getDiscounts,
  updateDiscount
} from "../store/actions/discount.actions";

import { filter, Observable } from "rxjs";

import { AppState } from "../../../utils/interfaces/store.interfaces";
import { Pagination } from "../../../utils/interfaces/app.interfaces";
import { Discount } from "../utils/interfaces/discount.interfaces";

@Injectable()
export class DiscountFacadeService {
  public get discounts$(): Observable<Discount[]> {
    return this.store.select(selectDiscountsList)
      .pipe(filter<Discount[]>(Boolean));
  }

  public get discount$(): Observable<Discount> {
    return this.store.select(selectCurrentDiscount)
      .pipe(filter<Discount>(Boolean));
  }

  constructor(private store: Store<AppState>) { }

  public getDiscounts(pagination: Pagination): void {
    this.store.dispatch(getDiscounts(pagination));
  }

  public getDiscount(name: string): void {
    this.store.dispatch(getDiscount({ name: name.toLowerCase() }));
  }

  public createDiscount(discount: Discount): void {
    const data = {
      ...discount,
      discountName: discount?.discountName?.toLowerCase(),
    };

    this.store.dispatch(createDiscount(data));
  }

  public updateDiscount(discount: Discount): void {
    const data = {
      ...discount,
      discountName: discount?.discountName?.toLowerCase(),
    };

    this.store.dispatch(updateDiscount(data));
  }

  public deleteDiscount(name: string): void {
    this.store.dispatch(deleteDiscount({ name: name.toLowerCase() }));
  }
}
