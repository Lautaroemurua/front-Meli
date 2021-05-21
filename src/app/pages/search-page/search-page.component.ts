import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchPageService } from './services/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  search = '';
  items: Observable<any> | undefined;
  errorMessage: any = undefined;
  constructor(public searchService: SearchPageService) { }
  ngOnInit() {
  }
  onSubmit() {
    this.items = this.searchService.searchByTerm(this.search).pipe(map(res => { return res }), catchError((err: HttpErrorResponse) => {
      this.errorMessage = err;
      return throwError(err);
    }));
  }
}
