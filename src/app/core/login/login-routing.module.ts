import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { LoginComponent } from "./login.component";

import { RoutePaths } from "../../utils/enums/app.enum";

const routes: Routes = [
  {
    path: RoutePaths.EMPTY_PATH,
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
