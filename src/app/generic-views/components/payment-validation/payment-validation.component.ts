import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, CustomStyleService, PaymentService, StateService, YumpiiLoaderService, YumpiiPaymentValidationComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.scss'],
})
export class PaymentValidationComponent extends YumpiiPaymentValidationComponent {

  constructor(
    router: Router,
    loaderService: YumpiiLoaderService,
    configService: ConfigService,
    stateService: StateService,
    paymentService: PaymentService,
    customStyleService: CustomStyleService
  ) {
    super(router, loaderService, configService, stateService, paymentService, customStyleService);
  }
}
