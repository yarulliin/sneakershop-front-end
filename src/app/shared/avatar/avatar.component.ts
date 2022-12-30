import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Sizes } from "../../utils/interfaces/sizes.interfaces";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input() public text: string = '';
  @Input() public routerLink: string | string[];
  @Input() public size: Sizes;
  @Input() public avatarUrl: string = '';
  @Input() public autoColor: boolean = false;
  @Input() public rounded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
