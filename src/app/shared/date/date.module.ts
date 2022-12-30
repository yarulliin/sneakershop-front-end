import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiInputDateModule } from "@taiga-ui/kit";
import { TuiErrorModule, TuiTextfieldControllerModule } from "@taiga-ui/core";

import { DateComponent } from './date.component';

@NgModule({
  declarations: [
    DateComponent
  ],
  exports: [
    DateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputDateModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
  ]
})
export class DateModule { }
