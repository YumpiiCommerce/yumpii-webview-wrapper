import {
  Component, Injectable, Input,
} from '@angular/core';
import { Location } from '@angular/common';
import { ConfigService, StateService, YumpiiHeaderComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends YumpiiHeaderComponent {
  constructor(
              configService: ConfigService,
              location: Location,
              stateService: StateService,
  ) {
    super(configService, location, stateService);
  }
}
