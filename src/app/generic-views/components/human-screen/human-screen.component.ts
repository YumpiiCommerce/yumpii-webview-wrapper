import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, HumanService, StateService, YumpiiHumanScreenComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-human-screen',
  templateUrl: './human-screen.component.html',
  styleUrls: ['./human-screen.component.scss'],
})
export class HumanScreenComponent extends YumpiiHumanScreenComponent {
  constructor(
              router: Router,
              configService: ConfigService,
              stateService: StateService,
              humanService: HumanService,
  ) {
    super(router, configService, stateService, humanService);
  }
}
