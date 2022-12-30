import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { DiscountEffects } from "./store/effects/discount.effects";
import { discountsReducer } from "./store/reducers/discount.reducers";

import { TuiButtonModule } from "@taiga-ui/core";

import { InputModule } from "../../shared/input/input.module";
import { DateModule } from "../../shared/date/date.module";
import { SearchItemModule } from "../../shared/search-item/search-item.module";

import { DiscountComponent } from './discount.component';

import { DiscountFacadeService } from "./services/discount-facade.service";
import { DiscountService } from "./services/discount.service";

import { Features } from "../../utils/enums/store.enums";

@NgModule({
  declarations: [
    DiscountComponent
  ],
  exports: [
    DiscountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    DateModule,
    TuiButtonModule,
    EffectsModule.forFeature([DiscountEffects]),
    StoreModule.forFeature(Features.DISCOUNTS, discountsReducer),
    SearchItemModule,
  ],
  providers: [
    DiscountFacadeService,
    DiscountService,
    DatePipe
  ],
})
export class DiscountModule { }
