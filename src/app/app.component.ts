// import { CarouselModule } from 'ngx-owl-carousel-o';
import { Component } from '@angular/core';
// import { ActivatedRoute, RouterOutlet } from '@angular/router';
// import { YumpiiSharedModule, YumpiiGenericViewsModule, YumpiiCategorizedModeModule, StateService, ConfigService } from '@yumpii/ngx-webview-lib';
// import { WrapperService } from './services/wrapperService';

@Component({
  standalone: false,
  selector: 'app-root',
  // imports: [CarouselModule, RouterOutlet, YumpiiSharedModule, YumpiiGenericViewsModule, YumpiiCategorizedModeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yumpii-webview';

  constructor() { }
}
