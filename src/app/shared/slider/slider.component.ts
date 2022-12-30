import { Component, OnInit, ChangeDetectionStrategy, Input, Optional } from '@angular/core';
import { NgControl } from "@angular/forms";

import { SizeL, SizeS } from "../../utils/interfaces/sizes.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent extends BaseControl implements OnInit {
  @Input() public withRange: boolean = true;
  @Input() public placeholder: string;
  @Input() public tooltip: string | null = null;
  @Input() public size: SizeS | SizeL = 'm';
  @Input() public min: number;
  @Input() public max: number;
  @Input() public sliderStep: number = 1;
  @Input() public quantum: number = 1;

  public steps: number;

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

  public ngOnInit(): void {
    this.steps = (this.max - this.min) / this.sliderStep;
  }
}
