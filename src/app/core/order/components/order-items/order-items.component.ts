import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { CartItem } from "../../../catalog/utils/interfaces/catalog.interfaces";

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemsComponent implements OnInit {
  @Input() public orders: CartItem[];

  constructor() { }

  public ngOnInit(): void {
  }

}
