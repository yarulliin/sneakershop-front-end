import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input, inject, Inject } from '@angular/core';
import { DatePipe } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TuiDay } from "@taiga-ui/cdk";

import { Discount } from "./utils/interfaces/discount.interfaces";

import { DiscountFormControlNames } from "./utils/enums/discount.enums";

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountComponent implements OnInit {
  @Input() public set item(discount: Discount) {
    if (discount?._id) {
      this._id = discount?._id;
      this.initFormData(discount);
    }
  };
  @Input() public searchItem: boolean;

  @Output() public emitSave: EventEmitter<Discount> = new EventEmitter<Discount>();
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter<string>();

  public discountForm: FormGroup;

  public readonly DiscountFormControlNames = DiscountFormControlNames;

  private _id: string;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public save(): void {
    const data = this.discountForm?.value;

    this.emitSave.emit({
      ...data,
      _id: this._id,
      discountDuration: new Date(data?.discountDuration?.year, data?.discountDuration?.month, data?.discountDuration?.day)
    });
  }

  public search(name: string): void {
    this.emitSearch.emit(name);
  }

  private initForm(): void {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);

    this.discountForm = this.fb.group({
      discountName: [null, [Validators.required]],
      discountAmount: [null, [Validators.min(1), Validators.max(99)]],
      discountDuration: [TuiDay.fromLocalNativeDate(nextDay), [Validators.required]],
    });
  }

  private initFormData(discount: Discount): void {
    this.discountForm?.patchValue(discount);
  }
}
