import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { TuiRootModule, TuiDialogModule, TUI_SANITIZER, TuiAlertModule } from "@taiga-ui/core";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from "./store/effects/app.effects";
import { appReduceMap } from "./store/appReduceMap";

import { LayoutModule } from "./core/layout/layout.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AppFacadeService } from "./services/app-facade.service";
import { AppService } from "./services/app.service";

import { LoginGuard } from "./utils/guards/login.guard";
import { AdminGuard } from "./utils/guards/admin.guard";

import { environment } from '../environments/environment';
import { httpInterceptorsProviders } from "./utils/providers/httpInterceptors.providers";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    LayoutModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    TuiRootModule,
    TuiAlertModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(appReduceMap, { }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
    TuiDialogModule,
  ],
  providers: [
    LoginGuard,
    AdminGuard,
    AppService,
    AppFacadeService,
    httpInterceptorsProviders,
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
