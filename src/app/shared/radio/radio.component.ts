import { Component, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { NgControl } from "@angular/forms";

import { SizeL, SizeS } from "../../utils/interfaces/sizes.interfaces";
import { HorizontalDirection } from "../../utils/interfaces/directions.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioComponent extends BaseControl {
  @Input() public label: string;
  @Input() public contentAlign: HorizontalDirection = 'right';
  @Input() public block: boolean = false;
  @Input() public size: SizeS | SizeL = 'm';
  @Input() public item: number | string | boolean;

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }
}
