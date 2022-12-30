import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPasswordModule } from "@taiga-ui/kit";
import {
  TuiErrorModule,
  TuiHintControllerModule,
  TuiPrimitiveTextfieldModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { TuiCurrencyPipeModule } from "@taiga-ui/addon-commerce";

import { InputComponent } from "./input.component";

@NgModule({
  declarations: [InputComponent],
    imports: [
      CommonModule,
      FormsModule,
      TuiInputModule,
      TuiPrimitiveTextfieldModule,
      TuiErrorModule,
      TuiHintControllerModule,
      TuiTextfieldControllerModule,
      TuiInputPasswordModule,
      TuiFieldErrorPipeModule,
      TuiCurrencyPipeModule
    ],
  exports: [InputComponent],
})
export class InputModule { }
