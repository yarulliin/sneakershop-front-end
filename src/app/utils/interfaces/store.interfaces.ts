import { App, AuthUserData } from "./app.interfaces";
import { Catalog } from "../../core/catalog/utils/interfaces/catalog.interfaces";
import { Discounts } from "../../core/discount/utils/interfaces/discount.interfaces";
import { Reviews } from "../../core/catalog/components/reviews/utils/interfaces/reviews.interfaces";
import { User } from "../../core/profile/components/info/utils/interfaces/profile-info.interfaces";

export interface AppState {
  user: AuthUserData;
  app: App;
  catalog: Catalog;
  profile: User;
  discounts: Discounts;
  reviews: Reviews;
}
