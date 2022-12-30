import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { TuiDurationOptions, tuiHeightCollapse } from "@taiga-ui/core";
import { tuiPure } from "@taiga-ui/cdk";

import { Review } from "./utils/interfaces/reviews.interfaces";
import { Data } from "../../../../utils/interfaces/app.interfaces";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [tuiHeightCollapse],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsComponent {
  @Input() public reviews: Data<Review[]>;

  @Output() emitChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() emitCreateReview: EventEmitter<Review> = new EventEmitter<Review>();

  public isCreate: boolean = false;

  public changePage(page: number): void {
    this.emitChangePage.emit(page);
  }

  public createReview(review: Review): void {
    this.toggleCreate();
    this.emitCreateReview.emit(review);
  }

  public toggleCreate(): void {
    this.isCreate = !this.isCreate;
  }

  @tuiPure
  getAnimation(): TuiDurationOptions {
    return { value: '', params: { duration: 200 } };
  }
}
