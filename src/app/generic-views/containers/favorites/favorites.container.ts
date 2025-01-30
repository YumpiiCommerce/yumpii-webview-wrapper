import { Component } from '@angular/core';
import { CategoryService, FavoriteService, YumpiiFavoritesContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-favorites',
  templateUrl: './favorites.container.html',
  styleUrls: ['./favorites.container.scss'],
})
export class FavoritesContainerComponent extends YumpiiFavoritesContainerComponent {
  constructor(
              categoryService: CategoryService,
              favoriteService: FavoriteService,
  ) {
    super(categoryService, favoriteService);
  }
}
