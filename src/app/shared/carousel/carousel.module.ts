import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiCarouselModule } from "@taiga-ui/kit";

import { PaginationModule } from "../pagination/pagination.module";

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PaginationModule,
    TuiCarouselModule,
  ]
})
export class CarouselModule { }
