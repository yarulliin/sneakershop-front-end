import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';
import { TuiBadgeModule } from "@taiga-ui/kit";

@NgModule({
    declarations: [
      BadgeComponent
    ],
    exports: [
      BadgeComponent
    ],
  imports: [
    CommonModule,
    TuiBadgeModule
  ]
})
export class BadgeModule { }
