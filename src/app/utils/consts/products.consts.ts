import { ProductsNames } from "../enums/products.enums";

export const NIKE_AIR_FORCE_IMAGES = [
  'https://api.meet-market.ru/images/2195275.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2195276.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2195277.jpg?q=100&h=2000&w=2000',
];
export const NIKE_DUNK_LOW_IMAGES = [
  'https://api.meet-market.ru/images/2194642.jpg?q=100&h=2000&w=2000',
];
export const NIKE_DUNK_HIGH_IMAGES = [
  'https://api.meet-market.ru/images/86004.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/86005.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/86006.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/86007.jpg?q=100&h=2000&w=2000',
];
export const NIKE_AIR_JORDAN_1_LOW_IMAGES = [
  'https://api.meet-market.ru/images/2190957.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2190959.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2190960.jpg?q=100&h=2000&w=2000',
];
export const NIKE_AIR_JORDAN_1_MID_IMAGES = [
  'https://api.meet-market.ru/images/258922.jpg?q=100&h=2000&w=2000',
];
export const NIKE_AIR_JORDAN_1_HIGH_IMAGES = [
  'https://api.meet-market.ru/images/2191489.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2191490.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2191491.jpg?q=100&h=2000&w=2000',
];
export const NIKE_AIR_JORDAN_4_IMAGES = [
  'https://api.meet-market.ru/images/2190950.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2191004.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/2191005.jpg?q=100&h=2000&w=2000',
];
export const ADIDAS_YEEZY_SLIDES_IMAGES = [
  'https://api.meet-market.ru/images/2194204.jpg?q=100&h=2000&w=2000',
];
export const ADIDAS_YEEZY_700_IMAGES = [
  'https://api.meet-market.ru/images/86066.jpg?q=100&h=2000&w=2000',
];
export const ADIDAS_YEEZY_350_IMAGES = [
  'https://api.meet-market.ru/images/313967.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/313968.jpg?q=100&h=2000&w=2000',
  'https://api.meet-market.ru/images/313969.jpg?q=100&h=2000&w=2000',
];

export const IMAGES_MAP = new Map()
  .set(ProductsNames.NIKE_AIR_FORCE, NIKE_AIR_FORCE_IMAGES)
  .set(ProductsNames.NIKE_DUNK_LOW, NIKE_DUNK_LOW_IMAGES)
  .set(ProductsNames.NIKE_DUNK_HIGH, NIKE_DUNK_HIGH_IMAGES)
  .set(ProductsNames.NIKE_AIR_JORDAN_1_LOW, NIKE_AIR_JORDAN_1_LOW_IMAGES)
  .set(ProductsNames.NIKE_AIR_JORDAN_1_MID, NIKE_AIR_JORDAN_1_MID_IMAGES)
  .set(ProductsNames.NIKE_AIR_JORDAN_1_HIGH, NIKE_AIR_JORDAN_1_HIGH_IMAGES)
  .set(ProductsNames.NIKE_AIR_JORDAN_4, NIKE_AIR_JORDAN_4_IMAGES)
  .set(ProductsNames.ADIDAS_YEEZY_SLIDES, ADIDAS_YEEZY_SLIDES_IMAGES)
  .set(ProductsNames.ADIDAS_YEEZY_700, ADIDAS_YEEZY_700_IMAGES)
  .set(ProductsNames.ADIDAS_YEEZY_350, ADIDAS_YEEZY_350_IMAGES);
