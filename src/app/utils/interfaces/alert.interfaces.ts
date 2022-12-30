import { TuiNotification } from "@taiga-ui/core";

export interface CatalogAlert {
  label: string;
  text?: string;
  status: TuiNotification;
}
