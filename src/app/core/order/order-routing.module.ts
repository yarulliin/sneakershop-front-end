import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RoutePaths } from "../../utils/enums/app.enum";
import { OrderComponent } from "./order.component";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: OrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
