import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

import { OrderFormService } from "../../services/order-form.service";

import { OrderDirective } from "../../directives/order.directive";

@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPaymentComponent extends OrderDirective {
  @Input() public total: number;

  @Output() public emitCheckDiscount: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    protected override orderFormService: OrderFormService
  ) {
    super(orderFormService);
  }

  public checkDiscount(name: string): void {
    this.emitCheckDiscount.emit(name);
  }
}
