import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YumpiiCartContainerComponent, YumpiiCategoryContainerComponent, YumpiiComboContainerComponent, YumpiiErrorAbortScreenComponent, YumpiiErrorRetryScreenComponent, YumpiiExpiredScreenComponent, YumpiiFeaturedListContainerComponent, YumpiiHumanScreenComponent, YumpiiMainContainerComponent, YumpiiPaymentContainerComponent, YumpiiPaymentErrorScreenComponent, YumpiiPaymentValidationComponent, YumpiiProductContainerComponent, YumpiiSuccessScreenComponent } from '@yumpii/ngx-webview-lib';
import { MainContainerComponent } from './main-container/main-container.component';
import { CategoryContainerComponent } from './categorized-mode/containers/category/category.container';
import { ProductContainerComponent } from './generic-views/containers/product/product.container';
import { FeaturedListContainerComponent } from './generic-views/containers/featured-list/featured-list.container';
import { ComboContainerComponent } from './generic-views/containers/combo/combo.container';
import { CartContainerComponent } from './generic-views/containers/cart/cart.container';
import { PaymentContainerComponent } from './generic-views/containers/payment/payment.container';
import { PaymentErrorScreenComponent } from './generic-views/components/payment-denied-screen/payment-error-screen.component';
import { SuccessScreenComponent } from './generic-views/components/success-screen/success-screen.component';
import { PaymentValidationComponent } from './generic-views/components/payment-validation/payment-validation.component';
import { ErrorRetryScreenComponent } from './generic-views/components/error-retry-screen/error-retry-screen.component';
import { ErrorAbortScreenComponent } from './generic-views/components/error-abort-screen/error-abort-screen.component';
import { ExpiredScreenComponent } from './generic-views/components/expired-screen/expired-screen.component';
import { HumanScreenComponent } from './generic-views/components/human-screen/human-screen.component';

const routes: Routes = [
  {
        path: ':slug',
        component: MainContainerComponent,
        children: [
          {
            path: 'category/:id',
            component: CategoryContainerComponent,
          },
          {
            path: 'product/:id',
            component: ProductContainerComponent,
          },
          {
            path: 'featured',
            component: FeaturedListContainerComponent,
          },
          {
            path: 'combo/:id',
            component: ComboContainerComponent,
          },
          {
            path: 'cart',
            component: CartContainerComponent,
          },
          {
            path: 'payment',
            children: [
              {
                path: '',
                component: PaymentContainerComponent,
              },
              {
                path: 'error',
                component: PaymentErrorScreenComponent,
              },
            ],
          },
          {
            path: 'payment-validation',
            component: PaymentValidationComponent,
          },
          {
            path: 'success',
            component: SuccessScreenComponent,
          },
          {
            path: 'retry',
            component: ErrorRetryScreenComponent,
          },
          {
            path: 'abort',
            component: ErrorAbortScreenComponent,
          },
          {
            path: 'expired',
            component: ExpiredScreenComponent,
          },
          {
            path: 'human',
            component: HumanScreenComponent,
          },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
