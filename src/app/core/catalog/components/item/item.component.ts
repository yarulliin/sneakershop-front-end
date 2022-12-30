import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Observable, tap } from "rxjs";

import { TuiNotification } from "@taiga-ui/core";

import { CatalogFacadeService } from "../../services/catalog-facade.service";
import { ReviewsFacadeService } from "../../services/reviews-facade.service";
import { SessionStorageService } from "../../../../utils/services/session-storage.service";

import { CartItem, CatalogItem, Color, Size } from "../../utils/interfaces/catalog.interfaces";
import { Review } from "../reviews/utils/interfaces/reviews.interfaces";
import { Data } from "../../../../utils/interfaces/app.interfaces";
import { AccordionItem } from "../../../../shared/accordion/utils/interfaces/accordion.interfaces";

import { PAGE_INDEX_0, PAGE_SIZE_20 } from "../../../../utils/consts/pagination.consts";
import { SEX_ABBREVIATION_MAP, SEX_MAP } from "../../utils/consts/item.consts";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  public item$: Observable<CatalogItem> = this.catalogFacadeService.catalogItem$;
  public reviews$: Observable<Data<Review[]>> = this.reviewsFacadeService.reviewsList$
    .pipe(tap(({ totalElements }: Data<Review[]>) =>
      this.reviewsConfig = [{ label: `Отзывы (${totalElements})` }]));

  public reviewsConfig: AccordionItem[];
  public form: FormGroup;

  public readonly id = this.route.snapshot.paramMap.get('id');

  public get isAddToCartButtonDisabled(): boolean {
    return !this.form?.valid;
  }

  constructor(
    private route: ActivatedRoute,
    private catalogFacadeService: CatalogFacadeService,
    private reviewsFacadeService: ReviewsFacadeService,
    private sessionStorageService: SessionStorageService,
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.initData();
    this.initForm();
  }

  public setToFavorites(
    item: CatalogItem,
    event: MouseEvent,
  ): void {
    const favorites = this.sessionStorageService.getItem<CatalogItem[]>('favorites');
    const inFavorites = this.isItemInFavorites(item);
    const newFavorites = inFavorites
      ? favorites.filter(({ _id }: CatalogItem) => _id !== item?._id)
      : [...favorites, item];
    const status = inFavorites
      ? TuiNotification.Info
      : TuiNotification.Success;
    const text = inFavorites
      ? 'Удалено из избранного'
      : 'Добавлено в избранное';

    event.stopPropagation();

    this.sessionStorageService.setItem<CatalogItem[]>('favorites', newFavorites);
    this.showAlert(`${item.brand} ${item.name}`, text, status);
  }

  public isItemInFavorites(item: CatalogItem): boolean {
    const favorites = this.sessionStorageService.getItem<CatalogItem[]>('favorites');

    return Boolean(favorites.find(({ _id }: CatalogItem) => _id === item?._id));
  }

  public addToCart(item: CatalogItem): void {
    const cart = this.sessionStorageService.getItem<CartItem[]>('cart')?.filter((cartItem: CartItem) =>
      cartItem?._id !== item?._id && this.form?.value?.size !== cartItem?.size);
    const cartItem = { ...item, ...this.form?.value };
    const status = TuiNotification.Success;
    const text = 'Добавлено в корзину';

    this.sessionStorageService.setItem<CartItem[]>('cart', [...cart, cartItem])
    this.showAlert(`${item.brand} ${item.name}`, text, status)
  }

  public getReviews(page: number = PAGE_INDEX_0): void {
    this.reviewsFacadeService.getReviews(this.id!, { size: PAGE_SIZE_20, page });
  }

  public createReview(review: Review): void {
    this.reviewsFacadeService.createReview({ ...review, productId: this.id! });
  }

  public getMax(sizes: Size[], size: number): number {
    return sizes?.find((el: Size) => el.size === size)?.quantity! || 0;
  }

  public findColors(sizes: Size[], size: number): Color[] | undefined {
    return sizes?.find((item: Size) => item?.size === size)?.colors;
  }

  public setColor(color: string): void {
    this.form?.get('color')?.setValue(color);
  }

  public getSexAbbreviationValue(sex: string): string {
    return SEX_ABBREVIATION_MAP.get(sex);
  }

  public getSexValue(sex: string): string {
    return SEX_MAP.get(sex);
  }

  private showAlert(label: string, text: string, status: TuiNotification): void {
    this.catalogFacadeService.showAlert({
      label,
      text,
      status,
    });
  }

  private initData(): void {
    this.catalogFacadeService.getCatalogItem(this.id!);
    this.getReviews();
  }

  private initForm(): void {
    this.form = this.fb.group({
      size: [null, [Validators.required]],
      quantity: [null, [Validators.required, Validators.min(1)]],
      color: [null, [Validators.required]]
    });
  }
}
