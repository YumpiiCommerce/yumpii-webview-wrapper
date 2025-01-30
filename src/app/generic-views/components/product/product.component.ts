import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService, ConfigService, CustomStyleService, EventTrackingService, FavoriteService, ProductService, StateService, YumpiiProductComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  exportAs: 'productView',
})
export class ProductComponent extends YumpiiProductComponent {
  constructor(
    configService: ConfigService,
    productService: ProductService,
    categoryService: CategoryService,
    favoriteService: FavoriteService,
    stateService: StateService,
    activatedRoute: ActivatedRoute,
    eventTrackingService: EventTrackingService,
    customStyleService: CustomStyleService,
  ) {
    super(configService, productService, categoryService, favoriteService, stateService, activatedRoute, eventTrackingService, customStyleService);
  }
}
