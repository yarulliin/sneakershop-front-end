import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiPaginationModule } from "@taiga-ui/kit";

import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    TuiPaginationModule
  ]
})
export class PaginationModule { }
