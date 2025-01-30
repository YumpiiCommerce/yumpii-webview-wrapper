import { Component } from '@angular/core';
import { CategoryService, CustomStyleService, YumpiiSubcategoriesListComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-subcategories-list',
  templateUrl: './subcategories-list.component.html',
  styleUrls: ['./subcategories-list.component.scss'],
})
export class SubcategoriesListComponent extends YumpiiSubcategoriesListComponent {
  constructor(
    customStyleService: CustomStyleService,
    categoryService: CategoryService) {
      super(customStyleService, categoryService);
    }
}
