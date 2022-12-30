import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { OrderFormService } from "../../services/order-form.service";

import { OrderDirective } from "../../directives/order.directive";

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderAddressComponent extends OrderDirective {
  constructor(
    protected override orderFormService: OrderFormService
  ) {
    super(orderFormService);
  }
}
