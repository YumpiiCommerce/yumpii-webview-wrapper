import { Component, OnInit } from '@angular/core';
import { ConfigService, YumpiiExpiredScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-expired-screen',
  templateUrl: './expired-screen.component.html',
  styleUrls: ['./expired-screen.component.scss'],
})
export class ExpiredScreenComponent extends YumpiiExpiredScreenComponent {

  constructor(configService: ConfigService) {
    super(configService);
  }
}
