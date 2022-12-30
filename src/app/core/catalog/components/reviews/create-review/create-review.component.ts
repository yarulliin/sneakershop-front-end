import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Review } from "../utils/interfaces/reviews.interfaces";

import { ReviewFormControlNamesEnum } from "../utils/enums/reviews.enums";

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateReviewComponent implements OnInit {
  @Output() emitCreateReview: EventEmitter<Review> = new EventEmitter<Review>();
  @Output() emitCancelCreate: EventEmitter<void> = new EventEmitter<void>();

  public form: FormGroup;

  public readonly ReviewFormControlNamesEnum = ReviewFormControlNamesEnum;

  public get isSaveButtonDisabled(): boolean {
    return !this.form?.valid;
  }

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public createReview(): void {
    const review = this.form?.value;

    this.emitCreateReview.emit(review);
  }

  public cancelCreate(): void {
    this.emitCancelCreate.emit();
  }

  private initForm(): void {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      rate: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
      description: [null, [Validators.maxLength(1000)]],
    });
  }
}
