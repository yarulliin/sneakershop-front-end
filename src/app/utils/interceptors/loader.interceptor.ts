import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

import { finalize, Observable } from "rxjs";

import { AppFacadeService } from "../../services/app-facade.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private appFacadeService: AppFacadeService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.appFacadeService.increaseSpinner();

    return next.handle(req).pipe(
      finalize(() => {
        this.appFacadeService.decreaseSpinner();
      }),
    );
  }
}
