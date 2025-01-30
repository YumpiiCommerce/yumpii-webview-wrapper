import { Component } from '@angular/core';
import { ConfigService, StateService, YumpiiCartContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-cart-container',
  templateUrl: './cart.container.html',
  styleUrls: ['./cart.container.scss'],
})
export class CartContainerComponent extends YumpiiCartContainerComponent {
  constructor(
              stateService: StateService,
              configService: ConfigService,
  ) {
    super(stateService, configService);
  }
}
