import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile.component";
import { InfoComponent } from "./components/info/info.component";
import { CartComponent } from "./components/cart/cart.component";
import { FavoritesComponent } from "./components/favorites/favorites.component";

import { RoutePaths } from "../../utils/enums/app.enum";

const routes: Routes = [
  {
    path: RoutePaths.PATH_WITH_ID,
    component: ProfileComponent,
    children: [
      {
        path: RoutePaths.EMPTY_PATH,
        redirectTo: RoutePaths.INFO,
        pathMatch: 'full',
      },
      {
        path: RoutePaths.INFO,
        component: InfoComponent,
      },
      {
        path: RoutePaths.CART,
        component: CartComponent,
      },
      {
        path: RoutePaths.FAVORITES,
        component: FavoritesComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
