import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { TuiNotification } from "@taiga-ui/core";

import { CatalogItem } from "../../utils/interfaces/catalog.interfaces";
import { CatalogAlert } from "../../../../utils/interfaces/alert.interfaces";
import { SEX_ABBREVIATION_MAP, SEX_MAP } from "../../utils/consts/item.consts";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogItemComponent {
  @Input() public item: CatalogItem;

  @Output() public emitAlert: EventEmitter<CatalogAlert> = new EventEmitter<CatalogAlert>();

  public get isItemInFavorites(): boolean {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');

    return Boolean(favorites.find(({ _id }: CatalogItem) => _id === this.item?._id));
  }

  public setToFavorites(
    item: CatalogItem,
    event: MouseEvent,
  ): void {
    const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
    const inFavorites = this.isItemInFavorites;
    const newFavorites = inFavorites
      ? favorites.filter(({ _id }: CatalogItem) => _id !== item?._id)
      : JSON.stringify([...favorites, item]);
    const status = inFavorites
      ? TuiNotification.Info
      : TuiNotification.Success;
    const text = inFavorites
      ? 'Удалено из избранного'
      : 'Добавлено в избранное';

    event.stopPropagation();

    sessionStorage.setItem('favorites', newFavorites);
    this.emitAlert.emit({
      label: `${item.brand} ${item.name}`,
      text,
      status,
    });
  }

  public getSexAbbreviationValue(sex: string): string {
    return SEX_ABBREVIATION_MAP.get(sex);
  }

  public getSexValue(sex: string): string {
    return SEX_MAP.get(sex);
  }
}
