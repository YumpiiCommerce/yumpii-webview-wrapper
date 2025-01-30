import { Component } from '@angular/core';
import { CategoryService, ConfigService, CustomStyleService, StateService, YumpiiCustomizationComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent extends YumpiiCustomizationComponent {
  constructor(
    configService: ConfigService,
    categoryService: CategoryService,
    customStyleService: CustomStyleService,
    stateService: StateService,
  ) {
    super(configService, categoryService, customStyleService, stateService);
  }
}
