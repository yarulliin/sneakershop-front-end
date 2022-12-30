import { FormGroup } from "@angular/forms";

import { OrderFormService } from "../services/order-form.service";

export class OrderDirective {
  public get form(): FormGroup {
    return this.orderFormService.form;
  }

  constructor(
    protected orderFormService: OrderFormService,
  ) { }
}
