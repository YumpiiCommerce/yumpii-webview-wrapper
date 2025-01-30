import {
  Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output,
} from '@angular/core';
import { ConfigService, CustomStyleService, EventTrackingService, YumpiiGenericCategoriesNavComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.scss'],
})
export class GenericCategoriesNavComponent extends YumpiiGenericCategoriesNavComponent {
  constructor(
    eventTrackingService: EventTrackingService,
    configService: ConfigService,
    customStyleService: CustomStyleService,
  ) {
    super(eventTrackingService, configService, customStyleService);
  }
}
