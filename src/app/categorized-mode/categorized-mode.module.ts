import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { MainCategorizedContainerComponent } from './containers/main-categorized/main-categorized.container';

import { FrontComponent } from './components/front/front.component';
import { BannersListComponent } from './components/banners-list/banners-list.component';
import { CategoryContainerComponent } from './containers/category/category.container';
import { SharedModule } from '../shared/shared.module';
import { GenericViewsModule } from '../generic-views/generic-views-view.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FeaturedCarouselComponent } from './components/featured-carousel/featured-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YumpiiCategorizedModeModule, YumpiiGenericViewsModule, YumpiiSharedModule } from '@yumpii/ngx-webview-lib';

@NgModule({
  declarations: [
    MainCategorizedContainerComponent,
    FrontComponent, BannersListComponent,
    CategoryContainerComponent,
    FeaturedCarouselComponent
  ],
  exports: [
    MainCategorizedContainerComponent,
    FrontComponent, BannersListComponent,
    CategoryContainerComponent,
    FeaturedCarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatTabsModule,
    InfiniteScrollDirective,
    YumpiiGenericViewsModule,
    YumpiiSharedModule,
    YumpiiCategorizedModeModule,
    GenericViewsModule,
    CarouselModule,
  ],
  })
export class CategorizedModeModule { }
