import { TuiValidationError } from "@taiga-ui/cdk";

export interface ValidationError {
  [key: string]: ValidationErrorTips;
}

export interface ValidationErrorTips {
  [key: string]: TuiValidationError<Record<string, unknown>>;
}
