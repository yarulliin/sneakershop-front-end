import { RouteConfig, RouteConfigs } from "../interfaces/route.interfaces";

import { RoutePaths } from "../enums/app.enum";

const catalog: RouteConfig = {
  path: RoutePaths.CATALOG,
};

const login: RouteConfig = {
  path: RoutePaths.LOGIN,
};

const register: RouteConfig = {
  path: RoutePaths.REGISTER,
};

const admin: RouteConfig = {
  path: RoutePaths.ADMIN,
};

const profile: RouteConfig = {
  path: RoutePaths.PROFILE,
};

const order: RouteConfig = {
  path: RoutePaths.ORDER,
};

export const ROUTE_CONFIG: RouteConfigs = {
  catalog,
  login,
  register,
  admin,
  profile,
  order,
};
