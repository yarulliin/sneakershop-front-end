import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TuiButtonModule } from "@taiga-ui/core";
import { TuiCheckboxLabeledModule } from "@taiga-ui/kit";

import { RegisterRoutingModule } from "./register-routing.module";
import { InputModule } from "../../shared/input/input.module";
import { RoleModule } from "../../utils/directives/role/role.module";
import { CheckboxModule } from "../../shared/checkbox/checkbox.module";

import { RegisterComponent } from "./register.component";

import { AppFacadeService } from "../../services/app-facade.service";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    InputModule,
    TuiButtonModule,
    TuiCheckboxLabeledModule,
    RoleModule,
    CheckboxModule,
  ],
  exports: [RegisterComponent],
  providers: [AppFacadeService]
})
export class RegisterModule {}
