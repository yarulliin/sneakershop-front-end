export interface RouteConfig {
  path: string;
  param?: string;
}

export interface RouteConfigs {
  [key: string]: RouteConfig;
}
