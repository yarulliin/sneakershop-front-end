import { PolymorpheusContent } from "@tinkoff/ng-polymorpheus";

export interface FileContent {
  name: string;
  size?: number;
  type?: string;
  src?: string;
  content?: PolymorpheusContent;
}
