import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiAccordionModule } from "@taiga-ui/kit";

import { TabsModule } from "../tabs/tabs.module";

import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  exports: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    TuiAccordionModule,
    TabsModule,
  ]
})
export class AccordionModule { }
