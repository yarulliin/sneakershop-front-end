import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ProductFormControlNames } from "./utils/enums/product.enums";
import { CartItem } from "../../../catalog/utils/interfaces/catalog.interfaces";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  @Input() isCreateMode: boolean;
  @Input() item: CartItem;

  @Output() public emitSave: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  public form: FormGroup;

  public readonly ProductFormControlNames = ProductFormControlNames;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initForm();
    if(this.item) {
      this.initFormData();
    }
  }

  public save(): void {
    const data = this.form?.value;

    this.emitSave.emit(data);
  }

  private initForm(): void {
   this.form = this.fb.group({
     id: [],
     brand: [null, [Validators.required]],
     name: [null, [Validators.required]],
     price: [null, [Validators.required]],
     sex: ['Male'],
     photo: [null],
   })
  }

  private initFormData(): void {
    this.form?.patchValue(this.item);
  }
}
