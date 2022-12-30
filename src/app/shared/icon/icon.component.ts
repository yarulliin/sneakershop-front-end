import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { SizeXL, SizeXS } from "../../utils/interfaces/sizes.interfaces";
import { Mode } from "../../utils/interfaces/statuses.interfaces";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() iconName: string;
  @Input() tooltip: string = '';
  @Input() isMarker: boolean;
  @Input() size: SizeXS | SizeXL = 's';
  @Input() mode: Mode | null;

  constructor() { }

  ngOnInit(): void {
  }
}
