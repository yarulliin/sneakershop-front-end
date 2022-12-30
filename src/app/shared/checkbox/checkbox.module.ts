import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiCheckboxBlockModule, TuiCheckboxLabeledModule } from "@taiga-ui/kit";

import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [
    CheckboxComponent
  ],
  exports: [
    CheckboxComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        TuiCheckboxLabeledModule,
        TuiCheckboxBlockModule
    ]
})
export class CheckboxModule { }
