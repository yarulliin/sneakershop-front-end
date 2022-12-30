import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { CatalogItem } from "../utils/interfaces/catalog.interfaces";
import { Data, Pagination } from "../../../utils/interfaces/app.interfaces";

import { urls } from "../../../utils/consts/urls";
import { createHttpParams } from "../../../utils/functions/app.functions";

const { products, productById } = urls;

@Injectable()
export class CatalogApiService {
  constructor(private http: HttpClient) { }

  public getCatalogList(paginationData: Pagination): Observable<Data<CatalogItem[]>> {
    const params = createHttpParams({ ...paginationData });

    return this.http.get<Data<CatalogItem[]>>(products, { params });
  }

  public getCatalogItem(id: string): Observable<CatalogItem> {
    return this.http.get<CatalogItem>(productById(id));
  }

  public createCatalogItem(item: CatalogItem): Observable<CatalogItem> {
    return this.http.post<CatalogItem>(products, item);
  }

  public updateCatalogItem(item: CatalogItem): Observable<CatalogItem> {
    return this.http.put<CatalogItem>(productById(item._id!), item);
  }

  public deleteCatalogItem(id: string): Observable<CatalogItem> {
    return this.http.delete<CatalogItem>(productById(id));
  }
}
