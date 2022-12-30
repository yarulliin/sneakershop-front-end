import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from "rxjs";

import { ProfileFacadeService } from "../profile/components/info/services/profile-facade.service";
import { DiscountFacadeService } from "../discount/services/discount-facade.service";
import { CatalogFacadeService } from "../catalog/services/catalog-facade.service";

import { CreateUser, User } from "../profile/components/info/utils/interfaces/profile-info.interfaces";
import { Discount } from "../discount/utils/interfaces/discount.interfaces";
import { CatalogItem } from "../catalog/utils/interfaces/catalog.interfaces";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  public discount$: Observable<Discount> = this.discountFacadeService.discount$;
  public user$: Observable<User> = this.profileFacadeService.profile$;

  public activeItemIndex: number = 0;

  public accordionConfig = [
    { label: 'Пользователь' },
    { label: 'Продукт' },
    { label: 'Скидка' },
  ];

  public tabsConfig = [
    { caption: 'Создать' },
    { caption: 'Редактировать' },
    { caption: 'Удалить' },
  ];

  constructor(
    private profileFacadeService: ProfileFacadeService,
    private discountFacadeService: DiscountFacadeService,
    private catalogFacadeService: CatalogFacadeService,
  ) { }

  public changeTab(index: number = 0): void {
    this.activeItemIndex = index;
  }

  public getUser(id: string): void {
    this.profileFacadeService.getUser(id);
  }

  public createUser(data: CreateUser): void {
    this.profileFacadeService.createUser(data);
  }

  public updateUser(data: User): void {
    this.profileFacadeService.updateUser(data);
  }

  public deleteUser(id: string): void {
    this.profileFacadeService.deleteUser(id);
  }

  public createDiscount(data: Discount): void {
    this.discountFacadeService.createDiscount(data);
  }

  public updateDiscount(data: Discount): void {
    this.discountFacadeService.updateDiscount(data);
  }

  public searchDiscount(discount: string): void {
    this.discountFacadeService.getDiscount(discount);
  }

  public deleteDiscount(name: string): void {
    this.discountFacadeService.deleteDiscount(name);
  }

  public createCatalogItem(item: CatalogItem): void {
    this.catalogFacadeService.createCatalogItem(item);
  }

  public updateCatalogItem(item: CatalogItem): void {
    this.catalogFacadeService.updateCatalogItem(item);
  }

  public deleteCatalogItem(id: string): void {
    this.catalogFacadeService.deleteCatalogItem(id);
  }
}
