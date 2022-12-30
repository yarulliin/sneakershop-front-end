import { Component, ChangeDetectionStrategy, Optional, Input } from '@angular/core';
import { NgControl } from "@angular/forms";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent extends BaseControl {
  @Input() public label: string;
  @Input() public isRequired: boolean;
  @Input() public isReadonly: boolean = false;
  @Input() public isDisabled: boolean = false;
  @Input() public min: number = 0;
  @Input() public max: number = 5;
  @Input() public iconNormal: string = 'tuiIconStarLarge';
  @Input() public iconFilled: string = 'tuiIconStarFilledLarge';

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

}
