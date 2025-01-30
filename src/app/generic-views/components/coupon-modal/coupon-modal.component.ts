import { Component } from '@angular/core';
import { CategoryService, ComboService, ConfigService, CouponService, ProductService, StateService, YumpiiCouponModalComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-coupon-modal',
  templateUrl: './coupon-modal.component.html',
  styleUrls: ['./coupon-modal.component.scss'],
})
export class CouponModalComponent extends YumpiiCouponModalComponent {
  constructor(
              configService: ConfigService,
              couponService: CouponService,
              stateService: StateService,
              categoryService: CategoryService,
              productService: ProductService,
              comboService: ComboService,
  ) {
    super(configService, couponService, stateService, categoryService, productService, comboService);
  }
}
