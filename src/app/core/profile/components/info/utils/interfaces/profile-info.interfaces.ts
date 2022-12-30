import { Roles } from "../../../../../../utils/enums/app.enum";
import { CartItem } from "../../../../../catalog/utils/interfaces/catalog.interfaces";

export interface UserId {
  userId: string;
}

export interface User extends UserId {
  name: string;
  cardNumber: number | string;
  cardCode: number | string;
  cardDate: string;
  phone: string;
  dateOfBirth: Date | string;
  sex?: string;
  role: Roles;
  email?: string;
  orders?: Order[];
}

export interface CreateUser extends User {
  password?: string;
}

export interface Order {
  userId?: string;
  cart: CartItem[];
  orderDetails: OrderDetails;
  total: number;
}

export class OrderDetails {
  country: string;
  city: string;
  address: string;
  index: number;
  card: number[]
}
