import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService, ConfigService, StateService, YumpiiFeaturedListContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-featured-list-container',
  templateUrl: './featured-list.container.html',
  styleUrls: ['./featured-list.container.scss'],
})
export class FeaturedListContainerComponent extends YumpiiFeaturedListContainerComponent {
  constructor(
              categoryService: CategoryService,
              configService: ConfigService,
              stateService: StateService,
              activatedRoute: ActivatedRoute,
              router: Router,
  ) {
    super(categoryService, configService, stateService, activatedRoute, router);
  }
}
