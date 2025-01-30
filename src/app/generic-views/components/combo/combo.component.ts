/* eslint-disable no-underscore-dangle */
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService, ComboService, ConfigService, CustomStyleService, StateService, YumpiiComboComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
})
export class ComboComponent extends YumpiiComboComponent {
  constructor(
              configService: ConfigService,
              categoryService: CategoryService,
              comboService: ComboService,
              stateService: StateService,
              activatedRoute: ActivatedRoute,
              customStyleService: CustomStyleService
  ) {
    super(configService, categoryService, comboService, stateService, activatedRoute, customStyleService);
  }
}
