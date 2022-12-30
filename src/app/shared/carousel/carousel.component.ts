import { Component, ChangeDetectionStrategy, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  @ContentChild('content') public content: TemplateRef<any>;

  @Input() public items: any[];
  @Input() public duration: number = 4000;
  @Input() public index: number = 0;

  constructor() { }

  public changePage(index: number): void {
    this.index = index;
  }
}
