import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { CatalogFacadeService } from "../../services/catalog-facade.service";

import { Data } from "../../../../utils/interfaces/app.interfaces";
import { CatalogItem } from "../../utils/interfaces/catalog.interfaces";
import { CatalogAlert } from "../../../../utils/interfaces/alert.interfaces";

import { ROUTE_CONFIG } from "../../../../utils/consts/app.consts";
import { PAGE_INDEX_0, PAGE_SIZE_10 } from "../../../../utils/consts/pagination.consts";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogListComponent implements OnInit {
  public catalogItems$: Observable<Data<CatalogItem[]>> =
    this.catalogFacadeService.catalogItems$;

  constructor(
    private catalogFacadeService: CatalogFacadeService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.getCatalogList();
  }

  public navigateToItem(id: string): void {
    this.router.navigate([ROUTE_CONFIG.catalog.path, id])
  }

  public showAlert(data: CatalogAlert): void {
    this.catalogFacadeService.showAlert(data);
  }

  public getCatalogList(page: number = PAGE_INDEX_0, size: number = PAGE_SIZE_10, searchData?: any): void {
    this.catalogFacadeService.getCatalogList({ ...searchData, page, size });
  }

  public search(data: any): void {
    const [priceFrom, priceTo] = data?.price;
    const searchData = {
      ...data,
      priceFrom,
      priceTo,
    };

    this.getCatalogList(PAGE_INDEX_0, PAGE_SIZE_10, searchData);
  }
}
