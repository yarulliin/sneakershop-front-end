import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { CatalogComponent } from "./catalog.component";
import { ItemComponent } from "./components/item/item.component";
import { CatalogListComponent } from "./components/catalog-list/catalog-list.component";

import { RoutePaths } from "../../utils/enums/app.enum";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: CatalogComponent,
    children: [
      {
        path: RoutePaths.EMPTY_PATH,
        component: CatalogListComponent,
      },
      {
        path: RoutePaths.PATH_WITH_ID,
        component: ItemComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
