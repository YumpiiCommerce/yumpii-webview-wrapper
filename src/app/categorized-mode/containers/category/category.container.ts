import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService, ConfigService, ProductService, StateService, YumpiiCategoryContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-categorized-view-category',
  templateUrl: './category.container.html',
  styleUrls: ['./category.container.scss'],
})
export class CategoryContainerComponent extends YumpiiCategoryContainerComponent {
  constructor(
    categoryService: CategoryService,
    productService: ProductService,
    stateService: StateService,
    configService: ConfigService,
    activatedRoute: ActivatedRoute,
    router: Router
  ) {
    super(categoryService, productService, stateService, configService, activatedRoute, router);
  }
}
