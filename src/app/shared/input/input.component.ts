import { ChangeDetectionStrategy, Component, Input, Optional } from '@angular/core';
import { NgControl } from "@angular/forms";

import { ValidationErrorTips } from "../../utils/interfaces/validation.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";
import { HorizontalDirection } from "../../utils/interfaces/directions.interfaces";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseControl {
  @Input() public label: string = '';
  @Input() public placeholder: string = '';
  @Input() public type: string;
  @Input() public icon: string = '';
  @Input() public iconAlign: HorizontalDirection = 'right';
  @Input() public error: string;
  @Input() public isRequired: boolean;
  @Input() public allowClear: boolean;
  @Input() public hintContent: string = '';
  @Input() public currency: string = '';
  @Input() public set errorMessages(messages: ValidationErrorTips) {
    this._errorTips = { ...messages };
  }

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }
}
