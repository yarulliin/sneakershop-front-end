import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiLabelModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiInputCountModule } from "@taiga-ui/kit";

import { InputCountComponent } from './input-count.component';

@NgModule({
  declarations: [
    InputCountComponent
  ],
  exports: [
    InputCountComponent
  ],
  imports: [
    CommonModule,
    TuiLabelModule,
    TuiInputCountModule,
    FormsModule,
    TuiTextfieldControllerModule,
  ]
})
export class InputCountModule { }
