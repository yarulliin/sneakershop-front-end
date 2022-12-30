import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiInputCardGroupedModule } from "@taiga-ui/addon-commerce";
import { TuiErrorModule } from "@taiga-ui/core";

import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputCardGroupedModule,
    TuiErrorModule
  ]
})
export class CardModule { }
