import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostListener('document:click', ['$event'])
  public toggleMenu(event: MouseEvent, clickedToButton?: boolean): void {
    event.stopPropagation();

    this.emitOpenMenu.emit(Boolean(clickedToButton));
  }

  @Input() public withMenuButton: boolean = true;

  @Output() public emitOpenMenu: EventEmitter<boolean> = new EventEmitter<boolean>();
}
