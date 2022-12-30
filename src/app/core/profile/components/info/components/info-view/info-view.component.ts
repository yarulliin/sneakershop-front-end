import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { User } from "../../utils/interfaces/profile-info.interfaces";

@Component({
  selector: 'app-info-view',
  templateUrl: './info-view.component.html',
  styleUrls: ['./info-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoViewComponent implements OnInit {
  @Input() public user: User;

  @Output() public emitEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public toggleEdit(): void {
    this.emitEdit.emit();
  }
}
