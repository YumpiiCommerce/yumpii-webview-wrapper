/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService, ComboService, ConfigService, StateService, YumpiiComboContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-categorized-view-combo',
  templateUrl: './combo.container.html',
  styleUrls: ['./combo.container.scss'],
})
export class ComboContainerComponent extends YumpiiComboContainerComponent {
  constructor(
              configService: ConfigService,
              categoryService: CategoryService,
              comboService: ComboService,
              stateService: StateService,
              activatedRoute: ActivatedRoute,
              router: Router,
  ) {
    super(configService, categoryService, comboService, stateService, activatedRoute, router);
  }
}
