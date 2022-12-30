import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { SizeL } from "../../utils/interfaces/sizes.interfaces";
import { BreadcrumbsConfig } from "./utils/interfaces/breadcrumbs.interfaces";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public size: SizeL = 'm';
  @Input() public config: BreadcrumbsConfig[];

  constructor() { }

  ngOnInit(): void {
  }
}
