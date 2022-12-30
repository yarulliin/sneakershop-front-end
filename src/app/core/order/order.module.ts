import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TuiIslandModule } from "@taiga-ui/kit";
import { TuiCurrencyPipeModule } from "@taiga-ui/addon-commerce";
import { TuiButtonModule, TuiHintModule } from "@taiga-ui/core";

import { OrderRoutingModule } from "./order-routing.module";
import { StepperModule } from "../../shared/stepper/stepper.module";
import { InputModule } from "../../shared/input/input.module";
import { CardModule } from "../../shared/card/card.module";
import { DiscountModule } from "../discount/discount.module";
import { AvatarModule } from "../../shared/avatar/avatar.module";
import { ImageModule } from "../../utils/pipes/image/image.module";

import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';
import { OrderPaymentComponent } from './components/order-payment/order-payment.component';

import { DiscountFacadeService } from "../discount/services/discount-facade.service";
import { OrderFormService } from "./services/order-form.service";

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    OrderAddressComponent,
    OrderPaymentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
    TuiIslandModule,
    StepperModule,
    TuiCurrencyPipeModule,
    TuiButtonModule,
    InputModule,
    CardModule,
    DiscountModule,
    AvatarModule,
    ImageModule,
    TuiHintModule,
  ],
  providers: [DiscountFacadeService, OrderFormService]
})
export class OrderModule { }
