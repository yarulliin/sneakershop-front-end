import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { profileReducer } from "./components/info/store/reducers/profile.reducer";
import { ProfileEffects } from "./components/info/store/effects/profile.effects";

import { TuiIslandModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiHintModule, TuiLabelModule } from "@taiga-ui/core";
import { TuiCurrencyPipeModule } from "@taiga-ui/addon-commerce";

import { ProfileRoutingModule } from "./profile-routing.module";
import { HeaderModule } from "../../shared/header/header.module";
import { TabsModule } from "../../shared/tabs/tabs.module";
import { AvatarModule } from "../../shared/avatar/avatar.module";
import { IconModule } from "../../shared/icon/icon.module";
import { CardModule } from "../../shared/card/card.module";
import { InputModule } from "../../shared/input/input.module";
import { RadioModule } from "../../shared/radio/radio.module";
import { DateModule } from "../../shared/date/date.module";
import { SearchItemModule } from "../../shared/search-item/search-item.module";
import { FilesModule } from "../../shared/files/files.module";
import { AccordionModule } from "../../shared/accordion/accordion.module";
import { ImageModule } from "../../utils/pipes/image/image.module";

import { ProfileComponent } from './profile.component';
import { InfoComponent } from './components/info/info.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { InfoEditComponent } from './components/info/components/info-edit/info-edit.component';
import { InfoViewComponent } from './components/info/components/info-view/info-view.component';
import { ProductComponent } from "./components/product/product.component";

import { ProfileService } from "./components/info/services/profile.service";
import { CatalogFacadeService } from "../catalog/services/catalog-facade.service";

import { Features } from "../../utils/enums/store.enums";

@NgModule({
  declarations: [
    ProfileComponent,
    InfoComponent,
    CartComponent,
    FavoritesComponent,
    InfoEditComponent,
    InfoViewComponent,
    ProductComponent,
  ],
  exports: [
    InfoEditComponent,
    ProfileComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    HeaderModule,
    TabsModule,
    TuiIslandModule,
    TuiLabelModule,
    AvatarModule,
    IconModule,
    CardModule,
    InputModule,
    TuiButtonModule,
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature(Features.PROFILE, profileReducer),
    RadioModule,
    DateModule,
    SearchItemModule,
    TuiCurrencyPipeModule,
    FilesModule,
    AccordionModule,
    TuiHintModule,
    ImageModule,
  ],
  providers: [
    ProfileService,
    CatalogFacadeService,
  ]
})
export class ProfileModule { }
