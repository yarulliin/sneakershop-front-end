import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TuiLoaderModule } from "@taiga-ui/core";

import { HeaderModule } from "../../shared/header/header.module";

import { LayoutComponent } from "./layout.component";
import { TuiIslandModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    TuiLoaderModule,
    HeaderModule,
    TuiIslandModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
