import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RegisterComponent } from "./register.component";

import { RoutePaths } from "../../utils/enums/app.enum";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
