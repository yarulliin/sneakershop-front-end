import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiRadioBlockModule, TuiRadioLabeledModule } from "@taiga-ui/kit";

import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [
    RadioComponent
  ],
  exports: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiRadioLabeledModule,
    TuiRadioBlockModule
  ]
})
export class RadioModule { }
