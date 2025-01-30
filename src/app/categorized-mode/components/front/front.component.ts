import { Component } from '@angular/core';
import { CategoryService, ConfigService, CustomStyleService, EventTrackingService, StateService, YumpiiFrontComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-categorized-view-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
})
export class FrontComponent extends YumpiiFrontComponent {

  constructor(
              configService: ConfigService,
              stateService: StateService,
              eventTrackingService: EventTrackingService,
              customStyleService: CustomStyleService,
              categoryService: CategoryService,
  ) {
    super(configService, stateService, eventTrackingService, customStyleService, categoryService);
  }
}
