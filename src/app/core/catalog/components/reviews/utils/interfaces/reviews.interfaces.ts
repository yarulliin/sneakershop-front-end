import { Data } from "../../../../../../utils/interfaces/app.interfaces";

export interface Reviews {
  reviewsList: Data<Review[]>;
}

export interface Review {
  _id?: string;
  productId?: string;
  description: string;
  rate: number;
  userName: string;
}
