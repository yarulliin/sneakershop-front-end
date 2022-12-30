import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";

import { ROUTE_CONFIG } from "../consts/app.consts";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const user = localStorage.getItem('user');
    if (!user) {
      (this.router.navigate([ROUTE_CONFIG.login.path]));
    }

    return Boolean(user);
  }
}
