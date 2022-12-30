import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { catalogReducer } from "./store/reducers/catalog.reducers";
import { reviewsReducer } from "./store/reducers/reviews.reducers";
import { CatalogEffects } from "./store/effects/catalog.effects";
import { ReviewsEffects } from "./store/effects/reviews.effects";

import { TuiCurrencyPipeModule } from "@taiga-ui/addon-commerce";
import { TuiIslandModule } from "@taiga-ui/kit";
import { TuiButtonModule, TuiHintModule } from "@taiga-ui/core";

import { CatalogRoutingModule } from "./catalog-routing.module";
import { AvatarModule } from "../../shared/avatar/avatar.module";
import { BadgeModule } from "../../shared/badge/badge.module";
import { IconModule } from "../../shared/icon/icon.module";
import { PaginationModule } from "../../shared/pagination/pagination.module";
import { BreadcrumbsModule } from "../../shared/breadcrumbs/breadcrumbs.module";
import { HeaderModule } from "../../shared/header/header.module";
import { FiltersModule } from "../../shared/filters/filters.module";
import { CarouselModule } from "../../shared/carousel/carousel.module";
import { InputModule } from "../../shared/input/input.module";
import { SelectModule } from "../../shared/select/select.module";
import { InputCountModule } from "../../shared/input-count/input-count.module";
import { RatingModule } from "../../shared/rating/rating.module";
import { AccordionModule } from "../../shared/accordion/accordion.module";
import { LineClampModule } from "../../shared/line-clamp/line-clamp.module";
import { ImageModule } from "../../utils/pipes/image/image.module";

import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { ItemComponent } from './components/item/item.component';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CreateReviewComponent } from './components/reviews/create-review/create-review.component';

import { CatalogApiService } from "./services/catalog-api.service";
import { CatalogFacadeService } from "./services/catalog-facade.service";
import { ReviewsApiService } from "./services/reviews-api.service";
import { ReviewsFacadeService } from "./services/reviews-facade.service";

import { Features } from "../../utils/enums/store.enums";

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent,
    ItemComponent,
    CatalogListComponent,
    ReviewsComponent,
    CreateReviewComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    AvatarModule,
    BadgeModule,
    IconModule,
    StoreModule.forFeature(Features.CATALOG, catalogReducer),
    StoreModule.forFeature(Features.REVIEWS, reviewsReducer),
    EffectsModule.forFeature([CatalogEffects, ReviewsEffects]),
    PaginationModule,
    BreadcrumbsModule,
    HeaderModule,
    FiltersModule,
    TuiCurrencyPipeModule,
    CarouselModule,
    TuiIslandModule,
    TuiButtonModule,
    InputModule,
    SelectModule,
    InputCountModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    TuiHintModule,
    ImageModule,
    LineClampModule,
  ],
  providers: [
    CatalogApiService,
    CatalogFacadeService,
    ReviewsApiService,
    ReviewsFacadeService,
  ]
})
export class CatalogModule { }
