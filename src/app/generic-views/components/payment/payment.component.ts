import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ConfigService, StateService, YumpiiPaymentComponent } from '@yumpii/ngx-webview-lib';


@Component({
  standalone: false,
  selector: 'custom-generic-views-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent extends YumpiiPaymentComponent {
  constructor(
      matIconRegistry: MatIconRegistry,
      stateService: StateService,
      domSanitizer: DomSanitizer,
      configService: ConfigService,
    ) {
      super(matIconRegistry, stateService, domSanitizer, configService);
  }
}
