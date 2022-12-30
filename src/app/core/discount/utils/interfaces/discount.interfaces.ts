export interface Discounts {
  discounts: Discount[];
  discount: Discount;
}

export interface Discount {
  _id?: string;
  discountName: string;
  discountAmount: number;
  discountDuration: Date;
}
