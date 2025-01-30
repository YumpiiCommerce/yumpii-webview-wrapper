import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { ConfigService, CustomStyleService, YumpiiFooterComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent extends YumpiiFooterComponent {
  constructor(
    configService: ConfigService,
    customStyleService: CustomStyleService,
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer,
  ) {
    super(configService, customStyleService, matIconRegistry, domSanitizer);
  }
}
