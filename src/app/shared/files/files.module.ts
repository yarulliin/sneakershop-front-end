import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiFilesModule, TuiInputFilesModule } from "@taiga-ui/kit";

import { FilesComponent } from './files.component';

@NgModule({
  declarations: [
    FilesComponent
  ],
  exports: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputFilesModule,
    TuiFilesModule,
  ]
})
export class FilesModule { }
