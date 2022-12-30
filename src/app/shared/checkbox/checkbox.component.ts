import { Component, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { NgControl } from "@angular/forms";

import { SizeL } from "../../utils/interfaces/sizes.interfaces";
import { HorizontalDirection } from "../../utils/interfaces/directions.interfaces";

import { Sizes } from "../../utils/enums/sizes.enum";
import { Directions } from "../../utils/enums/directions.enums";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent extends BaseControl {
  @Input() public label: string;
  @Input() public customCheckbox: boolean;
  @Input() public hideCheckbox: boolean = false;
  @Input() public contentAlign: HorizontalDirection = Directions.RIGHT;
  @Input() public size: SizeL = Sizes.M;

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl)
  }
}
