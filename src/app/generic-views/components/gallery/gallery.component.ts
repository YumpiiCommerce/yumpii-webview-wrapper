import { Component } from '@angular/core';
import { YumpiiGalleryComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent extends YumpiiGalleryComponent {
  constructor() {
    super();
  }
}
