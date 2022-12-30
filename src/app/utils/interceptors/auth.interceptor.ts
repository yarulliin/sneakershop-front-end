import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";

import { TOKEN_BLACKLIST_ROUTES } from "../consts/router.consts";

import { user } from "../functions/app.functions";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userInfo = user();

    if (!TOKEN_BLACKLIST_ROUTES.includes(req.url) && userInfo?.token) {
      const headers = {
        setHeaders: {
          Authorization: `Bearer_${userInfo?.token}`,
        },
      }

      req = req.clone(headers);
    }

    return next.handle(req);
  }
}
