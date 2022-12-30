import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { BreadcrumbsConfig } from "../breadcrumbs/utils/interfaces/breadcrumbs.interfaces";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  @Input() public tabs: BreadcrumbsConfig[];
  @Input() public activeItemIndex: number = 0;

  @Output() emitChangeTab: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.activeItemIndex = this.tabs.findIndex(({ routerLink }: BreadcrumbsConfig) =>
      this.route.firstChild?.routeConfig?.path === routerLink);
  }

  public changePage(index: number): void {
    this.emitChangeTab.emit(index);
  }
}
