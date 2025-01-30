import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoaderComponent } from './loader/loader.component';
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { CommentComponent } from './components/comment/comment.component';
import { SessionInterceptorService, YumpiiSharedModule } from '@yumpii/ngx-webview-lib';
import { Title } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [LoaderComponent, LoyaltyComponent, CommentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    YumpiiSharedModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LoaderComponent,
    LoyaltyComponent,
    CommentComponent
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SessionInterceptorService,
        multi: true,
    },
    Title,
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
export class SharedModule { }
