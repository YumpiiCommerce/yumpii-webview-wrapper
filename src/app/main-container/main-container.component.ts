import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComboService, ConfigService, EventTrackingService, StateService, YumpiiMainContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent extends YumpiiMainContainerComponent {
  constructor(
    configService: ConfigService,
    activatedRoute: ActivatedRoute,
    stateService: StateService,
    comboService: ComboService,
    eventTrackingService: EventTrackingService,
  ) {
    super(configService, activatedRoute, stateService, comboService, eventTrackingService);
  }
}
