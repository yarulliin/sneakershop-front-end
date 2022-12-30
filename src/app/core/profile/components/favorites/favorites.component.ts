import { Component, ChangeDetectionStrategy } from '@angular/core';

import { TuiNotification } from "@taiga-ui/core";

import { CatalogFacadeService } from "../../../catalog/services/catalog-facade.service";

import { CatalogItem } from "../../../catalog/utils/interfaces/catalog.interfaces";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  public favorites: CatalogItem[] = JSON.parse(sessionStorage.getItem('favorites') || '[]');

  constructor(private catalogFacadeService: CatalogFacadeService) { }

  public removeFromFavorites(item: CatalogItem, event: MouseEvent): void {
    event.preventDefault();
    this.favorites = this.favorites.filter(({ _id }: CatalogItem) => _id !== item?._id);

    sessionStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.showAlert(item);
  }

  private showAlert(item: CatalogItem): void {
    const data = {
      label: `${item.brand} ${item.name}`,
      text: 'removed from favorites',
      status: TuiNotification.Info,
    }

    this.catalogFacadeService.showAlert(data);
  }
}
