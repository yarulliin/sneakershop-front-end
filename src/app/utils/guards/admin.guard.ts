import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { filter, first, Observable, tap } from "rxjs";

import { AppFacadeService } from "../../services/app-facade.service";

import { AuthUserData } from "../interfaces/app.interfaces";

import { Roles } from "../enums/app.enum";

import { Unsubscribe } from "../decorators/unsubscribe.decorator";
import { ROUTE_CONFIG } from "../consts/app.consts";

@Unsubscribe()
@Injectable()
export class AdminGuard implements CanActivate {
  private isUserAdmin: boolean;

  constructor(
    private appFacadeService: AppFacadeService,
    private router: Router,
  ) {
    this.appFacadeService.userInfo$.pipe(
      first(),
      filter<AuthUserData>(Boolean),
      tap((user: AuthUserData) => {
        this.isUserAdmin = user?.role === Roles.ADMIN
      }),
    ).subscribe()
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // if (!this.isUserAdmin) {
    //   (this.router.navigate([ROUTE_CONFIG.catalog.path]));
    // }
    //
    // return this.isUserAdmin;

    return true;
  }
}
