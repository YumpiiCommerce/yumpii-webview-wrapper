import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, EventTrackingService, StateService, YumpiiSuggestionComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss'],
})
export class SuggestionComponent extends YumpiiSuggestionComponent {
  constructor(
              configService: ConfigService,
              stateService: StateService,
              eventTrackingService: EventTrackingService,
              router: Router,
  ) {
    super(configService, stateService, eventTrackingService, router);
  }
}
