import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TuiRatingModule } from "@taiga-ui/kit";

import { RatingComponent } from './rating.component';

@NgModule({
    declarations: [
        RatingComponent
    ],
    exports: [
        RatingComponent
    ],
    imports: [
        CommonModule,
        TuiRatingModule,
        FormsModule,
    ]
})
export class RatingModule { }
