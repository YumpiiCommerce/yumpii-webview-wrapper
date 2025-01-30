import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, StateService, YumpiiLoaderService, YumpiiPaymentContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-payment',
  templateUrl: './payment.container.html',
  styleUrls: ['./payment.container.scss']
})
export class PaymentContainerComponent extends YumpiiPaymentContainerComponent {
  constructor(
    router: Router,
    configService: ConfigService,
    stateService: StateService,
    loaderService: YumpiiLoaderService,
  ) {
    super(router, configService, stateService, loaderService);
  }
}
