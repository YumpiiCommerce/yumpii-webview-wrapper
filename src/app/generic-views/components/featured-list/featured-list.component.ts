import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, ConfigService, CustomStyleService, YumpiiFeaturedListComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.scss'],
})
export class FeaturedListComponent extends YumpiiFeaturedListComponent {
  constructor(
    configService: ConfigService,
    categoryService: CategoryService,
    router: Router,
    customStyleService: CustomStyleService,
  ) {
    super(configService, categoryService, router, customStyleService);
  }
}
