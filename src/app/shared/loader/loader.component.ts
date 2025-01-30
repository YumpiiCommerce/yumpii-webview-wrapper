import { Component } from '@angular/core';
import { ConfigService, YumpiiLoaderComponent, YumpiiLoaderService } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent extends YumpiiLoaderComponent {
  constructor(
              loaderService: YumpiiLoaderService,
              configService: ConfigService,
  ) {
    super(loaderService, configService);
  }
}
