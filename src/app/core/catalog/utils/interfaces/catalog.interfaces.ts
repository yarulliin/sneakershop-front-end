import { Data } from "../../../../utils/interfaces/app.interfaces";

export interface Catalog {
  items: Data<CatalogItem[]>;
  currentItem: CatalogItem;
}

export interface CatalogItem {
  _id?: string;
  brand: string;
  name: string;
  price: Price;
  sizes: Size[];
  description: string;
  sex: string;
  art: string;
}

export interface CartItem extends CatalogItem {
  size: number;
  quantity: number;
  color: string;
}

export interface Price {
  price: number;
  currency: string;
}

export interface Size {
  size: number;
  quantity: number;
  colors: Color[];
}

export interface Color {
  color: string;
  quantity: number;
}
