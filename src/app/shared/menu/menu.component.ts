import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { LocalStorageService } from "../../utils/services/local-storage.service";

import { AuthUserData } from "../../utils/interfaces/app.interfaces";

import { Roles } from "../../utils/enums/app.enum";
import { AppFacadeService } from "../../services/app-facade.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  public user: AuthUserData;

  public readonly roles = Roles;

  constructor(
    private localStorageService: LocalStorageService,
    private appFacadeService: AppFacadeService
  ) { }

  public ngOnInit(): void {
    this.user = this.localStorageService.getItem<AuthUserData>('user');
    console.log(this.user)
  }

  public logout(): void {
    this.appFacadeService.logout();
  }
}
