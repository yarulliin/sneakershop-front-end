import { userReducer } from "./reducers/user.reducer";
import { appReducer } from "./reducers/app.reducer";
import { profileReducer } from "../core/profile/components/info/store/reducers/profile.reducer";
import { catalogReducer } from "../core/catalog/store/reducers/catalog.reducers";
import { discountsReducer } from "../core/discount/store/reducers/discount.reducers";
import { reviewsReducer } from "../core/catalog/store/reducers/reviews.reducers";

export const appReduceMap = {
  app: appReducer,
  user: userReducer,
  profile: profileReducer,
  catalog: catalogReducer,
  discounts: discountsReducer,
  reviews: reviewsReducer,
};
