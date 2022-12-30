import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { TuiDataListWrapperModule, TuiMultiSelectModule, TuiSelectModule } from "@taiga-ui/kit";
import { TuiDataListModule, TuiLoaderModule, TuiScrollbarModule, TuiTextfieldControllerModule } from "@taiga-ui/core";
import { TuiLetModule } from "@taiga-ui/cdk";

import { SelectComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiLoaderModule,
    ScrollingModule,
    TuiScrollbarModule,
    TuiMultiSelectModule,
    TuiDataListWrapperModule,
    TuiLetModule,
  ]
})
export class SelectModule { }
