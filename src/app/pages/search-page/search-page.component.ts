import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Item } from './models/search-interface';
import { SearchPageService } from './services/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit{
  search: string | null | undefined;
  items: Item[] | undefined;
  errorMessage: any = undefined;
  isLoading = false;

  constructor(public searchService: SearchPageService) {
   }
   
  ngOnInit() {
    try {
      this.getters();
    } catch (error) {
      return error
    }
  }

  counter(i: number) {
    return new Array(i)
  }

  getters() {
    this.searchService.getItemData().subscribe(res => {
      this.items = res;
    })
  }

  getResponse(response: Item[]) {
    this.items = response;
  }

  searchItems(search: string) {
    this.searchService.searchByTerm(search).pipe(take(1)).subscribe(res => {
      this.items = res
    });
  }

  getSkeletonStatus(status: boolean) {
    this.isLoading = status;
  }

}
