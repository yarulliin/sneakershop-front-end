import { Injectable } from "@angular/core";

import { StorageClass } from "../classes/storage.class";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageClass {
  public getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }

  public setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
