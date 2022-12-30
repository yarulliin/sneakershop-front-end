import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { selectProfile } from "../store/selectors/profile.selectors";
import { createUser, updateUser, deleteUser, getUser, createOrder, getOrders } from "../store/actions/profile.actions";

import { Observable } from "rxjs";

import { AppState } from "../../../../../utils/interfaces/store.interfaces";
import { CreateUser, Order, User } from "../utils/interfaces/profile-info.interfaces";

@Injectable({
  providedIn: 'root',
})
export class ProfileFacadeService {
  public get profile$(): Observable<User> {
    return this.store.select(selectProfile);
  }

  constructor(private store: Store<AppState>) { }

  public getUser(id: string): void {
    this.store.dispatch(getUser({ id }));
  }

  public createUser(data: CreateUser): void {
    this.store.dispatch(createUser(data));
  }

  public updateUser(data: User): void {
    this.store.dispatch(updateUser(data));
  }

  public deleteUser(id: string): void {
    this.store.dispatch(deleteUser({ id }));
  }

  public getOrders(): void {
    this.store.dispatch(getOrders());
  }

  public createOrder(data: Order): void {
    this.store.dispatch(createOrder(data));
  }
}

