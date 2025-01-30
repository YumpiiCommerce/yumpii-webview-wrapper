import { Component } from '@angular/core';
import { CategoryService, ConfigService, CustomStyleService, YumpiiBannersListComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.scss'],
})
export class BannersListComponent extends YumpiiBannersListComponent {
  constructor(
    categoryService: CategoryService,
    configService: ConfigService,
    customStyleService: CustomStyleService,
  ) {
    super(categoryService, configService, customStyleService);
  }
}
