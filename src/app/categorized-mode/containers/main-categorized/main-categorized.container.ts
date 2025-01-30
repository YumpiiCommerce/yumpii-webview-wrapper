import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ConfigService, CustomStyleService, YumpiiMainCategorizedContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-categorized-view-main',
  templateUrl: './main-categorized.container.html',
  styleUrls: ['./main-categorized.container.scss'],
})
export class MainCategorizedContainerComponent extends YumpiiMainCategorizedContainerComponent {
  constructor(
              router: Router,
              configService: ConfigService,
              customStyleService: CustomStyleService,
  ) {
    super(router, configService, customStyleService);
  }
}
