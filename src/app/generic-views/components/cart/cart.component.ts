/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService, ComboService, ConfigService, CustomStyleService, EventTrackingService, OrderService, StateService, YumpiiCartComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent extends YumpiiCartComponent {

  constructor(
              categoryService: CategoryService,
              comboService: ComboService,
              configService: ConfigService,
              stateService: StateService,
              orderService: OrderService,
              eventTrackingService: EventTrackingService,
              router: Router,
              matDialog: MatDialog,
              customStyleService: CustomStyleService,
  ) {
    super(categoryService, comboService, configService, stateService, orderService, eventTrackingService, router, matDialog, customStyleService);
  }
}
