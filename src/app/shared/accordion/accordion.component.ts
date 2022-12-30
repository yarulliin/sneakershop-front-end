import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
  QueryList,
  ContentChildren,
  Output,
  EventEmitter
} from '@angular/core';

import { AccordionItem } from "./utils/interfaces/accordion.interfaces";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @ContentChildren(TemplateRef) public content: QueryList<TemplateRef<unknown>>;

  @Input() public items: AccordionItem[];
  @Input() public rounded: boolean = true;
  @Input() public closeOthers: boolean = true;

  @Output() emitChangeTab: EventEmitter<void> = new EventEmitter<void>();

  public open: boolean = false;

  public changeTab(): void {
    this.open = true;
    this.emitChangeTab.emit();
  }
}
