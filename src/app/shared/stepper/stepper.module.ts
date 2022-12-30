import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { TuiStepperModule } from "@taiga-ui/kit";

@NgModule({
    declarations: [
        StepperComponent
    ],
    exports: [
        StepperComponent
    ],
    imports: [
        CommonModule,
        TuiStepperModule
    ]
})
export class StepperModule { }
