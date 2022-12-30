import { HttpErrorResponse } from "@angular/common/http";

export const getDiscountWarningLabel = (error: HttpErrorResponse) =>
  error.status === 404
    ? 'Промокод с таким названием не найден'
    : 'Срок действия промокода истек';
