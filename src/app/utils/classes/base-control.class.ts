import { Directive, HostListener } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

import { TuiValidationError } from "@taiga-ui/cdk";

import { ValidationErrorTips } from "../interfaces/validation.interfaces";

@Directive()
export class BaseControl implements ControlValueAccessor {
  @HostListener('focusout')
  public onBlur(): void {
    this.onTouched();
  }

  public propagateChange: (value: string) => void = () => {};
  public onTouched = () => {};

  private _formValue: any;

  protected _errorTips: ValidationErrorTips;

  public get control(): AbstractControl | null {
    return this.ngControl && this.ngControl.control;
  }

  public set formValue(formValue: any) {
    this.propagateChange(formValue);
    this._formValue = formValue;
  }

  public get formValue(): any {
    return this._formValue;
  }

  constructor(protected ngControl: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  public writeValue(value: any): void {
    this._formValue = value;
  }

  public registerOnChange(onChange: (value: string) => void): void {
    this.propagateChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  public getErrorTips(): TuiValidationError | null {
    return this.ngControl?.errors && this.ngControl?.touched
      ? this._errorTips?.[Object.keys(this.ngControl?.errors)[0]]
      : null;
  }
}
