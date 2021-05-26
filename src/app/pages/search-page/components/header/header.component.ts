import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Input() searchType: string | undefined
  search: string = '';
  items: Observable<any> | undefined;
  errorMessage: any;
  constructor(private searchService: SearchPageService, private router: Router) { }
  onSubmit() {
    this.items = this.searchService.searchByTerm(this.search).pipe(map(res => {
      return res
    }), catchError((err: HttpErrorResponse) => {
      this.errorMessage = err;
      return throwError(err);
    }));
  }
}