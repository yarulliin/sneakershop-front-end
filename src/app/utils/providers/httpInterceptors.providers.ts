import { Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInterceptor } from "../interceptors/auth.interceptor";
import { LoaderInterceptor } from "../interceptors/loader.interceptor";

export const httpInterceptorsProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
];
