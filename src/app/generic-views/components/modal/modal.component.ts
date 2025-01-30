import { Component } from '@angular/core';
import { YumpiiModalComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent extends YumpiiModalComponent {
  constructor() {
    super();
  }
}
