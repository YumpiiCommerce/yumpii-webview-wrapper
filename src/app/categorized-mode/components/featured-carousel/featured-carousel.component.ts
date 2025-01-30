import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService, ConfigService, CustomStyleService, YumpiiFeaturedCarouselComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.scss'
})
export class FeaturedCarouselComponent extends YumpiiFeaturedCarouselComponent {
  constructor(
    categoryService: CategoryService,
    configService: ConfigService,
    router: Router,
    elementRef: ElementRef,
    customStyleService: CustomStyleService,
  ) {
    super(categoryService, configService, router, elementRef, customStyleService);
  }
}
