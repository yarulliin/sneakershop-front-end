import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiButtonModule } from "@taiga-ui/core";

import { InputModule } from "../input/input.module";

import { SearchItemComponent } from './search-item.component';

@NgModule({
  declarations: [
    SearchItemComponent
  ],
  exports: [
    SearchItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiButtonModule,
    InputModule
  ]
})
export class SearchItemModule { }
