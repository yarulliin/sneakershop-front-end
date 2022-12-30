import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class OrderFormService {
  private _form: FormGroup;

  public get form(): FormGroup {
    return this._form;
  }

  public set form(formGroup: FormGroup) {
    this._form = formGroup;
  }

  public get isFormValid(): boolean {
    return this.form.valid;
  }

  constructor(private fb: FormBuilder) { }

  public initForm(): void {
    this.form = this.fb.group({
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      address: [null, [Validators.required]],
      index: [null, [Validators.required, Validators.min(100000), Validators.max(999999)]],
      card: [null, [Validators.required]],
      discount: [null],
    });
  }
}
