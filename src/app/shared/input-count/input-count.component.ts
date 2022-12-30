import { Component, OnInit, ChangeDetectionStrategy, Optional, Input } from '@angular/core';
import { NgControl } from "@angular/forms";

import { tuiInputCountOptionsProvider } from "@taiga-ui/kit";

import { BaseControl } from "../../utils/classes/base-control.class";
import { SizeL, SizeS } from "../../utils/interfaces/sizes.interfaces";

@Component({
  selector: 'app-input-count',
  templateUrl: './input-count.component.html',
  styleUrls: ['./input-count.component.scss'],
  providers: [
    tuiInputCountOptionsProvider({
      icons: {
        up: `tuiIconChevronUp`,
        down: `tuiIconChevronDown`,
      },
      appearance: `secondary`,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputCountComponent extends BaseControl implements OnInit {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public min: number = 0;
  @Input() public max: number = Infinity;
  @Input() public step: number = 1;
  @Input() public size: SizeS | SizeL = 'l';

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit(): void {
  }

}
