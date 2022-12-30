import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteItemComponent {
  @Input() public label: string = 'Id';

  @Output() public emitDelete: EventEmitter<string> = new EventEmitter<string>();

  public item: string;

  public delete(): void {
    this.emitDelete.emit(this.item);
  }
}
