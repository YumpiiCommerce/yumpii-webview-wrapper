import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService, ConfigService, CustomStyleService, ProductService, StateService, YumpiiFrontContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-front',
  templateUrl: './front.container.html',
  styleUrls: ['./front.container.scss'],
})
export class FrontContainerComponent extends YumpiiFrontContainerComponent {
  constructor(
    configService: ConfigService,
    stateService: StateService,
    categoryService: CategoryService,
    productService: ProductService,
    activatedRoute: ActivatedRoute,
    router: Router,
    customStyleService: CustomStyleService,
  ) {
    super(configService, stateService, categoryService, productService, activatedRoute, router, customStyleService);
  }
}
