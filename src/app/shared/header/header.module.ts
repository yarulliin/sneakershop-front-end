import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TuiIslandModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiLinkModule } from "@taiga-ui/core";

import { IconModule } from "../icon/icon.module";
import { AvatarModule } from "../avatar/avatar.module";
import { RoleModule } from "../../utils/directives/role/role.module";

import { HeaderComponent } from './header.component';
import { MenuComponent } from "../menu/menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    AvatarModule,
    TuiIslandModule,
    RouterModule,
    TuiLinkModule,
    RoleModule,
    TuiButtonModule,
  ]
})
export class HeaderModule { }
