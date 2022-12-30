import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TuiButtonModule, TuiLinkModule } from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/kit";

import { LoginRoutingModule } from "./login-routing.module";
import { InputModule } from "../../shared/input/input.module";

import { LoginComponent } from "./login.component";

import { AppFacadeService } from "../../services/app-facade.service";

@NgModule({
  declarations: [LoginComponent],
    imports: [
      CommonModule,
      LoginRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      InputModule,
      TuiButtonModule,
      TuiInputModule,
      TuiLinkModule,
    ],
  exports: [LoginComponent],
  providers: [AppFacadeService],
})
export class LoginModule {}
