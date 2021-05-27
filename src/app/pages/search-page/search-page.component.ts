import { Component } from '@angular/core';
import { Item } from './models/search-interface';
import { SearchPageService } from './services/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  search = '';
  items: Item[] | undefined;
  errorMessage: any = undefined;
  constructor(public searchService: SearchPageService) { }

  getResponse(response: Item[]) {
    this.items = response;
  }

}
