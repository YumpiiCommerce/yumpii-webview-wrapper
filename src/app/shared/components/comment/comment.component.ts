import { Component } from '@angular/core';
import { ConfigService, YumpiiCommentComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent extends YumpiiCommentComponent {
  constructor(
    configService: ConfigService
  ) {
    super(configService);
  }
}
