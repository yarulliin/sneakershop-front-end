import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { TuiAvatarModule } from "@taiga-ui/kit";
import { TuiLinkModule } from "@taiga-ui/core";

import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    AvatarComponent
  ],
  exports: [
    AvatarComponent
  ],
  imports: [
    CommonModule,
    TuiAvatarModule,
    TuiLinkModule,
    RouterModule,
  ]
})
export class AvatarModule { }
