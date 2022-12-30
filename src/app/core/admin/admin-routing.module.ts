import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AdminComponent } from "./admin.component";

import { RoutePaths } from "../../utils/enums/app.enum";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
