import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemComponent {
  @Input() public label: string;

  @Output() public emitSearch: EventEmitter<string> = new EventEmitter<string>();

  public item: string;

  public search(): void {
    this.emitSearch.emit(this.item);
  }
}
