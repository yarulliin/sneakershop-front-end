import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BehaviorSubject, Observable } from "rxjs";

import { SessionStorageService } from "../../utils/services/session-storage.service";
import { DiscountFacadeService } from "../discount/services/discount-facade.service";

import { StepperConfig } from "../../shared/stepper/utils/interfaces/stepper.interfaces";
import { CartItem } from "../catalog/utils/interfaces/catalog.interfaces";
import { Discount } from "../discount/utils/interfaces/discount.interfaces";
import { OrderFormService } from "./services/order-form.service";
import { ProfileFacadeService } from "../profile/components/info/services/profile-facade.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent implements OnInit {
  public discountAmount$: Observable<Discount> = this.discountFacadeService.discount$;
  public activeItemIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public orders: CartItem[];
  public total: number;
  public stepperConfig: StepperConfig[] = [
    {
      label: 'Заказ',
    },
    {
      label: 'Адрес доставки',
    },
    {
      label: 'Оплата',
    },
  ];

  public get isFormValid(): boolean {
    return this.orderFormService.isFormValid;
  }

  constructor(
    private sessionStorageService: SessionStorageService,
    private discountFacadeService: DiscountFacadeService,
    private orderFormService: OrderFormService,
    private profileFacadeService: ProfileFacadeService,
  ) { }

  public ngOnInit(): void {
    this.orders = this.sessionStorageService.getItem<CartItem[]>('cart');
    this.orderFormService.initForm();
  }

  public nextStep(index?: number): void {
    this.activeItemIndex$.next(index !== undefined ? index : this.activeItemIndex$?.value + 1);
  }

  public buy(): void {
    this.profileFacadeService.createOrder({
      cart: this.orders,
      total: this.total,
      orderDetails: this.orderFormService.form?.value,
    });
  }

  public checkDiscount(name: string): void {
    this.discountFacadeService.getDiscount(name);
  }

  public getTotal(discountAmount?: number): number {
    const total = this.orders?.reduce((prev: number, curr: CartItem) => prev + curr?.price?.price, 0);
    this.total = discountAmount ? Math.floor(total / 100 * (100 - discountAmount)) : total;

    return this.total;
  }
}
