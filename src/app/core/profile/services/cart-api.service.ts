import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Order } from "../components/info/utils/interfaces/profile-info.interfaces";

import { urls } from "../../../utils/consts/urls";

const { cart } = urls;

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  constructor(private httpClient: HttpClient) { }

  public getOrders(id: string): Observable<Order[]> {
    const url = `${cart}/${id}`;

    return this.httpClient.get<Order[]>(url);
  }

  public createOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(cart, order);
  }
}
