import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService, ConfigService, EventTrackingService, OrderService, ProductService, StateService, YumpiiProductContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-view-product',
  templateUrl: './product.container.html',
  styleUrls: ['./product.container.scss'],
})
export class ProductContainerComponent extends YumpiiProductContainerComponent {
  constructor(
    configService: ConfigService,
    stateService: StateService,
    categoryService: CategoryService,
    activatedRoute: ActivatedRoute,
    orderService: OrderService,
    eventTrackingService: EventTrackingService,
    location: Location,
    router: Router,
    productService: ProductService,
  ) {
    super(configService, stateService, categoryService, activatedRoute, orderService, eventTrackingService, location, router, productService);
  }
}
