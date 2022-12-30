import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Orientation, StepperConfig } from "./utils/interfaces/stepper.interfaces";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit {
  @Input() orientation: Orientation = 'horizontal';
  @Input() config: StepperConfig[];
  @Input() activeItemIndex: number;

  @Output() emitChangeTab: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public changeIndex(index: number): void {
    this.emitChangeTab.emit(index);
  }
}
