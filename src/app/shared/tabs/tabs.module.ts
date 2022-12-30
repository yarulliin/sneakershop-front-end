import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TuiTabsModule } from "@taiga-ui/kit";

import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    TuiTabsModule,
    RouterModule
  ]
})
export class TabsModule { }
