import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiButtonModule } from "@taiga-ui/core";

import { InputModule } from "../input/input.module";

import { DeleteItemComponent } from './delete-item.component';

@NgModule({
  declarations: [
    DeleteItemComponent
  ],
  exports: [
    DeleteItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    TuiButtonModule
  ]
})
export class DeleteItemModule { }
