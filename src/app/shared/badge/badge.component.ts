import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { SizeL, SizeS } from "../../utils/interfaces/sizes.interfaces";
import { Status } from "../../utils/interfaces/statuses.interfaces";

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit {
  @Input() public value: any = '';
  @Input() public color: string = '';
  @Input() public hoverable: boolean = false;
  @Input() public size: SizeS | SizeL = "m";
  @Input() public status: Status;

  constructor() { }

  ngOnInit(): void {
  }

}
