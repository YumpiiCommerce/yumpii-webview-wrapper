import { Component } from '@angular/core';
import { ConfigService, CustomStyleService, StateService, YumpiiLoyaltyComponent, YumpiiLoyaltyService } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-loyalty-summary',
  templateUrl: './loyalty.component.html',
  styleUrls: ['./loyalty.component.scss']
})
export class LoyaltyComponent extends YumpiiLoyaltyComponent {
  constructor(
    loyaltyService: YumpiiLoyaltyService,
    customStyleService: CustomStyleService,
    stateService: StateService,
    configService: ConfigService,
  ) {
    super(loyaltyService, customStyleService, stateService, configService);
  }
}
