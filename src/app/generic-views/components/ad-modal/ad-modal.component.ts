import { Component } from '@angular/core';
import { YumpiiAdModalComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-ad-modal',
  templateUrl: './ad-modal.component.html',
  styleUrls: ['./ad-modal.component.scss'],
})
export class AdModalComponent extends YumpiiAdModalComponent {
}
