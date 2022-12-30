import { Component, ChangeDetectionStrategy, Optional, Input } from '@angular/core';
import { NgControl } from "@angular/forms";

import { BaseControl } from "../../utils/classes/base-control.class";
import { ValidationErrorTips } from "../../utils/interfaces/validation.interfaces";
import { TuiDay } from "@taiga-ui/cdk";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateComponent extends BaseControl {
  @Input() public label: string;
  @Input() public allowClear: boolean = true;
  @Input() public min: TuiDay = TuiDay.currentLocal();
  @Input() public max: TuiDay = new TuiDay(3000, 1, 1);
  @Input() public set errorMessages(messages: ValidationErrorTips) {
    this._errorTips = { ...messages };
  }

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }
}
