import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from "./core/layout/layout.component";

import { RoutePaths } from "./utils/enums/app.enum";

import { ROUTE_CONFIG } from "./utils/consts/app.consts";

import { AdminGuard } from "./utils/guards/admin.guard";
import { LoginGuard } from "./utils/guards/login.guard";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: LayoutComponent,
    children: [
      {
        path: ROUTE_CONFIG.catalog.path,
        loadChildren: () => import ("./core/catalog/catalog.module").then(m => m.CatalogModule),
      },
      {
        path: RoutePaths.EMPTY_PATH,
        redirectTo: ROUTE_CONFIG.catalog.path,
        pathMatch: 'full',
      },
      {
        path: ROUTE_CONFIG.admin.path,
        loadChildren: () => import ("./core/admin/admin.module").then(m => m.AdminModule),
        canActivate: [AdminGuard],
      },
      {
        path: ROUTE_CONFIG.profile.path,
        loadChildren: () => import ("./core/profile/profile.module").then(m => m.ProfileModule),
        canActivate: [LoginGuard],
      },
      {
        path: ROUTE_CONFIG.order.path,
        loadChildren: () => import ("./core/order/order.module").then(m => m.OrderModule),
      },
    ],
  },
  {
    path: ROUTE_CONFIG.login.path,
    loadChildren: () => import ("./core/login/login.module").then(m => m.LoginModule),
  },
  {
    path: ROUTE_CONFIG.register.path,
    loadChildren: () => import ("./core/register/register.module").then(m => m.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
