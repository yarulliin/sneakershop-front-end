import { Component, OnInit, ChangeDetectionStrategy, Optional, Input } from '@angular/core';
import { NgControl } from "@angular/forms";

import { ValidationErrorTips } from "../../utils/interfaces/validation.interfaces";

import { BaseControl } from "../../utils/classes/base-control.class";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent extends BaseControl implements OnInit {
  @Input() public set errorMessages(messages: ValidationErrorTips) {
    this._errorTips = { ...messages };
  }

  constructor(
    @Optional() protected override ngControl: NgControl
  ) {
    super(ngControl);
  }

  ngOnInit(): void {
  }
}
