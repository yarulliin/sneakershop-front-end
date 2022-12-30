import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiHintModule, TuiSvgModule } from "@taiga-ui/core";

import { IconComponent } from './icon.component';
import { TuiMarkerIconModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ],
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiHintModule,
        TuiMarkerIconModule
    ]
})
export class IconModule { }
