import { Component } from '@angular/core';
import { CategoryService, StateService, YumpiiSearchResultsContainerComponent } from '@yumpii/ngx-webview-lib';

@Component({
  standalone: false,
  selector: 'custom-generic-views-search-results',
  templateUrl: './search-results.container.html',
  styleUrls: ['./search-results.container.scss'],
})
export class SearchResultsContainerComponent extends YumpiiSearchResultsContainerComponent {

  constructor(
              stateService: StateService,
              categoryService: CategoryService,
  ) {
    super(stateService, categoryService);
  }
}
