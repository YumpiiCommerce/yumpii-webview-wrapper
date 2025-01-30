import { NgModule } from '@angular/core';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { SearchResultsContainerComponent } from './containers/search-results/search-results.container';
import { GenericCategoriesNavComponent } from './components/categories-nav/categories-nav.component';
import { CartContainerComponent } from './containers/cart/cart.container';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ProductComponent } from './components/product/product.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { ModalComponent } from './components/modal/modal.component';
import { SuccessScreenComponent } from './components/success-screen/success-screen.component';
import { ExpiredScreenComponent } from './components/expired-screen/expired-screen.component';

import { FrontContainerComponent } from './containers/front/front.container';
import { FeaturedListComponent } from './components/featured-list/featured-list.component';
import { AdModalComponent } from './components/ad-modal/ad-modal.component';
import { ComboComponent } from './components/combo/combo.component';
import { ComboContainerComponent } from './containers/combo/combo.container';
import { FeaturedListContainerComponent } from './containers/featured-list/featured-list.container';
import { ErrorRetryScreenComponent } from './components/error-retry-screen/error-retry-screen.component';
import { ErrorAbortScreenComponent } from './components/error-abort-screen/error-abort-screen.component';
import { HumanScreenComponent } from './components/human-screen/human-screen.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FavoritesContainerComponent } from './containers/favorites/favorites.container';
import { MatIconModule } from '@angular/material/icon';
import { CouponModalComponent } from './components/coupon-modal/coupon-modal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PaymentContainerComponent } from './containers/payment/payment.container';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentValidationComponent } from './components/payment-validation/payment-validation.component';
import { PaymentErrorScreenComponent } from './components/payment-denied-screen/payment-error-screen.component';
import { YumpiiGenericViewsModule, YumpiiSharedModule } from '@yumpii/ngx-webview-lib';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatNativeDateModule } from '@angular/material/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { ProductContainerComponent } from './containers/product/product.container';

@NgModule({
  declarations: [
    GenericCategoriesNavComponent,
    FrontContainerComponent,
    ProductsListComponent,
    ProductComponent,
    ProductContainerComponent,
    CustomizationComponent,
    SearchBoxComponent,
    SearchResultsContainerComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    SuggestionComponent,
    ModalComponent,
    CartContainerComponent,
    SuccessScreenComponent,
    ExpiredScreenComponent,
    AdModalComponent,
    ComboComponent,
    ComboContainerComponent,
    FeaturedListComponent,
    FeaturedListContainerComponent,
    ErrorRetryScreenComponent,
    ErrorAbortScreenComponent,
    HumanScreenComponent,
    GalleryComponent,
    FavoritesContainerComponent,
    SubcategoriesListComponent,
    CouponModalComponent,
    PaymentContainerComponent,
    PaymentComponent,
    PaymentValidationComponent,
    PaymentErrorScreenComponent,
  ],
  imports: [
    YumpiiGenericViewsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    YumpiiSharedModule,
    MatTabsModule,
    MatDialogModule,
    CarouselModule,
    InfiniteScrollDirective,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ClickOutsideModule,
  ],
  exports: [
    FrontContainerComponent,
    ProductsListComponent,
    ProductComponent,
    SearchBoxComponent,
    SearchResultsContainerComponent,
    GenericCategoriesNavComponent,
    HeaderComponent,
    FooterComponent,
    CartContainerComponent,
    CartComponent,
    SuggestionComponent,
    SuccessScreenComponent,
    ExpiredScreenComponent,
    MatIconModule,
    ModalComponent,
    AdModalComponent,
    FeaturedListComponent,
    ErrorRetryScreenComponent,
    ErrorAbortScreenComponent,
    HumanScreenComponent,
    GalleryComponent,
    FavoritesContainerComponent,
    SubcategoriesListComponent,
    PaymentContainerComponent,
    PaymentValidationComponent,
  ],
  providers: [
    MatDatepickerModule,
  ],
  })
export class GenericViewsModule { }
