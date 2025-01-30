import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, CustomStyleService, YumpiiSuccessScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss'],
})
export class SuccessScreenComponent extends YumpiiSuccessScreenComponent {
  constructor(
    configService: ConfigService,
    router: Router,
    customStyleService: CustomStyleService
  ) {
    super(configService, router, customStyleService);
  }
}
