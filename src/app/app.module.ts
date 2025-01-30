import { NgModule, provideZoneChangeDetection } from '@angular/core';

import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { GenericViewsModule } from './generic-views/generic-views-view.module';
import { SharedModule } from './shared/shared.module';
import { YumpiiCategorizedModeModule, YumpiiGenericViewsModule, YumpiiLoaderInterceptor } from '@yumpii/ngx-webview-lib';
import { CategorizedModeModule } from './categorized-mode/categorized-mode.module';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    YumpiiGenericViewsModule,
    YumpiiCategorizedModeModule,
    SharedModule,
    GenericViewsModule,
    CategorizedModeModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YumpiiLoaderInterceptor,
      multi: true,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ]})
export class AppModule { }
