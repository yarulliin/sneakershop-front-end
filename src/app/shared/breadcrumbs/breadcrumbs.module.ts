import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TuiLinkModule } from "@taiga-ui/core";
import { TuiBreadcrumbsModule } from "@taiga-ui/kit";

import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    TuiLinkModule,
    TuiBreadcrumbsModule,
    RouterModule,
  ]
})
export class BreadcrumbsModule { }
