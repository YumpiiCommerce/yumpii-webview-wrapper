import { Component, OnInit } from '@angular/core';
import { ConfigService, YumpiiErrorAbortScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-error-abort-screen',
  templateUrl: './error-abort-screen.component.html',
  styleUrls: ['./error-abort-screen.component.scss'],
})
export class ErrorAbortScreenComponent extends YumpiiErrorAbortScreenComponent {
  constructor(configService: ConfigService) {
    super(configService);
  }
}
