import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiLineClampModule } from "@taiga-ui/kit";

import { LineClampComponent } from './line-clamp.component';

@NgModule({
  declarations: [
    LineClampComponent
  ],
  exports: [
    LineClampComponent
  ],
  imports: [
    CommonModule,
    TuiLineClampModule
  ]
})
export class LineClampModule { }
