import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, CustomStyleService, OrderService, StateService, YumpiiPaymentErrorScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-payment-error-screen',
  templateUrl: './payment-error-screen.component.html',
  styleUrls: ['./payment-error-screen.component.scss'],
})
export class PaymentErrorScreenComponent extends YumpiiPaymentErrorScreenComponent {
  constructor(
              router: Router,
              configService: ConfigService,
              stateService: StateService,
              orderService: OrderService,
              customStyleService: CustomStyleService,
  ) {
    super(router, configService, stateService, orderService, customStyleService);
  }
}
