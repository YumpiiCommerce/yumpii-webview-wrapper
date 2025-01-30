import { Component, Renderer2 } from '@angular/core';
import { CategoryService, ConfigService, CustomStyleService, EventTrackingService, ProductService, StateService, YumpiiSearchBoxComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent extends YumpiiSearchBoxComponent {
  constructor(
    stateService: StateService,
    configService: ConfigService,
    categoryService: CategoryService,
    productService: ProductService,
    eventTrackingService: EventTrackingService,
    renderer: Renderer2,
    customStyleService: CustomStyleService,
  ) {
    super(stateService, configService, categoryService, productService, eventTrackingService, renderer, customStyleService);
  }
}
