import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TuiIslandModule } from "@taiga-ui/kit";

import { AdminRoutingModule } from "./admin-routing.module";
import { TabsModule } from "../../shared/tabs/tabs.module";
import { AccordionModule } from "../../shared/accordion/accordion.module";
import { ProfileModule } from "../profile/profile.module";
import { DiscountModule } from "../discount/discount.module";
import { DeleteItemModule } from "../../shared/delete-item/delete-item.module";
import { CatalogModule } from "../catalog/catalog.module";

import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TuiIslandModule,
    AccordionModule,
    TabsModule,
    ProfileModule,
    DiscountModule,
    DeleteItemModule,
    CatalogModule,
  ],
  exports: [AdminComponent],
})
export class AdminModule { }
