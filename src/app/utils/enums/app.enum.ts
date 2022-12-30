export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum RoutePaths {
  EMPTY_PATH = '',
  PATH_WITH_ID = ':id',
  CATALOG = 'catalog',
  LOGIN = 'login',
  REGISTER = 'register',
  ADMIN = 'admin',
  PROFILE = 'profile',
  PROFILE_WITH_ID = 'profile/:id',
  INFO = 'info',
  CART = 'cart',
  FAVORITES = 'favorites',
  ORDER = 'order',
}
