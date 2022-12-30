import { environment } from "../../../environments/environment";

const { baseUrl } = environment;

export const urls = {
  products: `${baseUrl}/products`,
  productById: (id: string) => `${baseUrl}/products/${id}`,
  profile: `${baseUrl}/user`,
  profileWithId: (id: string) => `${baseUrl}/profile/${id}`,
  discount: `${baseUrl}/discount`,
  discountWithParam: (param: string) => `${baseUrl}/discount/${param}`,
  reviews: `${baseUrl}/reviews`,
  reviewWithParam: (param: string) => `${baseUrl}/reviews/${param}`,
  login: `${baseUrl}/login`,
  register: `${baseUrl}/register`,
  cart: `${baseUrl}/cart`,
}
