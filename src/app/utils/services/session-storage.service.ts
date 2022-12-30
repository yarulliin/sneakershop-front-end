import { Injectable } from "@angular/core";

import { StorageClass } from "../classes/storage.class";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements StorageClass  {
  public getItem<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) || '[]');
  }

  public setItem<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
