import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BreadcrumbsConfig } from "../../shared/breadcrumbs/utils/interfaces/breadcrumbs.interfaces";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public readonly tabsConfig: BreadcrumbsConfig[] = [
    {
      caption: 'Информация',
      routerLink: 'info'
    },
    {
      caption: 'Корзина',
      routerLink: 'cart'
    },
    {
      caption: 'Избранное',
      routerLink: 'favorites'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
