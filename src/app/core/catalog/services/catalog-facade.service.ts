import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { catalogItem, catalogList } from "../store/selectors/catalog.selectors";
import {
  createCatalogItem,
  deleteCatalogItem,
  getCatalogItem,
  getCatalogList,
  updateCatalogItem
} from "../store/actions/catalog.actions";
import { showAlert } from "../../../store/actions/app.actions";

import { filter, Observable } from "rxjs";

import { AppState } from "../../../utils/interfaces/store.interfaces";
import { CatalogItem } from "../utils/interfaces/catalog.interfaces";
import { Data, Pagination } from "../../../utils/interfaces/app.interfaces";
import { CatalogAlert } from "../../../utils/interfaces/alert.interfaces";

@Injectable()
export class CatalogFacadeService {
  public get catalogItems$(): Observable<Data<CatalogItem[]>> {
    return this.store.select(catalogList)
      .pipe(filter<Data<CatalogItem[]>>(Boolean));
  }

  public get catalogItem$(): Observable<CatalogItem> {
    return this.store.select(catalogItem)
      .pipe(filter<CatalogItem>(Boolean));
  }

  constructor(private store: Store<AppState>) { }

  public getCatalogList(pagination: Pagination): void {
    this.store.dispatch(getCatalogList(pagination));
  }

  public getCatalogItem(id: string): void {
    this.store.dispatch(getCatalogItem({ id }));
  }

  public createCatalogItem(item: CatalogItem): void {
    this.store.dispatch(createCatalogItem(item));
  }

  public updateCatalogItem(item: CatalogItem): void {
    this.store.dispatch(updateCatalogItem(item));
  }

  public deleteCatalogItem(id: string): void {
    this.store.dispatch(deleteCatalogItem({ id }));
  }

  public showAlert(data: CatalogAlert): void {
    this.store.dispatch(showAlert(data));
  }
}
