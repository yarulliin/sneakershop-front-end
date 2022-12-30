import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CartItem } from "../../../catalog/utils/interfaces/catalog.interfaces";
import { SessionStorageService } from "../../../../utils/services/session-storage.service";
import { TuiNotification } from "@taiga-ui/core";
import { CatalogFacadeService } from "../../../catalog/services/catalog-facade.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  public cart: CartItem[];

  constructor(
    private sessionStorageService: SessionStorageService,
    private catalogFacadeService: CatalogFacadeService,
  ) { }

  public ngOnInit(): void {
    this.cart = this.sessionStorageService.getItem<CartItem[]>('cart');
  }

  public removeFromCart(item: CartItem, event: MouseEvent): void {
    event.preventDefault();

    this.cart = this.cart?.filter(({ _id }: CartItem) => _id !== item?._id);
    this.sessionStorageService.setItem<CartItem[]>('cart', this.cart);
    this.showAlert(item)
  }

  private showAlert(item: CartItem): void {
    const data = {
      label: `${item.brand} ${item.name}`,
      text: 'removed from cart',
      status: TuiNotification.Info,
    }

    this.catalogFacadeService.showAlert(data);
  }
}
