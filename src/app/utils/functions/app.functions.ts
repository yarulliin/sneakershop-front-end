import { HttpParams } from "@angular/common/http";

import { Params, AuthUserData } from "../interfaces/app.interfaces";

import { SEX_MAP_FOR_FILTER } from "../../core/catalog/utils/consts/item.consts";

export const createHttpParams = (params: Params): HttpParams => {
  let httpParams: HttpParams = new HttpParams();

  Object.keys(params).forEach(param => {
    const value = params[param];
    const transformToHttpCondition = value || value === 0 || value === false;

    if (transformToHttpCondition) {
      if (Array.isArray(value)) {
        value.forEach(valueItem => (httpParams = httpParams.append(param, valueItem)));
      } else {
        httpParams = httpParams.set(param, params[param]);
      }
    }
  });

  return httpParams;
};

export const user = (): AuthUserData => JSON.parse(localStorage.getItem('user') || '[]');

export const createFilters = <T extends { sex: string }>(formValue: T): T => ({
  ...formValue,
  sex: Array.isArray(formValue?.sex)
    ? formValue?.sex?.map((sex: string) => SEX_MAP_FOR_FILTER.get(sex))
    : SEX_MAP_FOR_FILTER.get(formValue?.sex)
});
