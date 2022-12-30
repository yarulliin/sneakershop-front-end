import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiInputRangeModule, TuiInputSliderModule } from "@taiga-ui/kit";
import { TuiHintControllerModule, TuiTextfieldControllerModule } from "@taiga-ui/core";

import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputSliderModule,
    TuiInputRangeModule,
    TuiTextfieldControllerModule,
    TuiHintControllerModule,
  ]
})
export class SliderModule { }
