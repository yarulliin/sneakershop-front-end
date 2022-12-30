import { Roles } from "../enums/app.enum";

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
  role?: Roles;
}

export interface AuthUserData {
  id: string;
  name: string;
  token: string;
  role?: Roles;
}

export interface App {
  spinner: boolean;
}

export interface Params {
  [key: string]: string | number | boolean;
}

export interface Data<T> extends Pagination {
  data: T;
}

export interface Pagination {
  page?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
  refresh?: boolean;
}

export interface Id {
  id: string;
}

export interface Name {
  name: string;
}
