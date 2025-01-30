import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, StateService, YumpiiErrorRetryScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-error-retry-screen',
  templateUrl: './error-retry-screen.component.html',
  styleUrls: ['./error-retry-screen.component.scss'],
})
export class ErrorRetryScreenComponent extends YumpiiErrorRetryScreenComponent {
  constructor(
              router: Router,
              configService: ConfigService,
              stateService: StateService,
  ) {
    super(router, configService, stateService);
  }
}
