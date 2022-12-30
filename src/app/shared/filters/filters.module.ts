import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TuiButtonModule, TuiTooltipModule } from "@taiga-ui/core";

import { IconModule } from "../icon/icon.module";
import { SelectModule } from "../select/select.module";
import { SliderModule } from "../slider/slider.module";

import { FiltersComponent } from './filters.component';
import { FiltersFormComponent } from './components/filters-form/filters-form.component';
import { TuiIslandModule } from "@taiga-ui/kit";
import { InputModule } from "../input/input.module";

@NgModule({
  declarations: [
    FiltersComponent,
    FiltersFormComponent
  ],
  exports: [
    FiltersComponent
  ],
    imports: [
        CommonModule,
        IconModule,
        TuiTooltipModule,
        SelectModule,
        FormsModule,
        ReactiveFormsModule,
        TuiButtonModule,
        SliderModule,
        TuiIslandModule,
        InputModule,
    ]
})
export class FiltersModule { }
