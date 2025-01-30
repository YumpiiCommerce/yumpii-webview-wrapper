import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService, ConfigService, CustomStyleService, EventTrackingService, FavoriteService, StateService, YumpiiProductsListComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent extends YumpiiProductsListComponent {
  constructor(
    favoriteService: FavoriteService,
    configService: ConfigService,
    stateService: StateService,
    eventTrackingService: EventTrackingService,
    categoryService: CategoryService,
    activeRoute: ActivatedRoute,
    customStyleService: CustomStyleService,
  ) {
    super(favoriteService, configService, stateService, eventTrackingService, categoryService, activeRoute, customStyleService);
  }
}
