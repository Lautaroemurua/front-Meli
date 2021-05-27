import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Item } from '../../models/search-interface';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  search: string = '';
  errorMessage: any;
  @Input() searchType: string | undefined;
  @Output() valueResponse: EventEmitter<Item[]> = new EventEmitter();

  constructor(private searchService: SearchPageService, private router: Router) { }
  onSubmit() {
    if (this.searchType === 'detailsPage') {
      this.router.navigate(['/'], { queryParams: { search: this.search } });
    } else {
      this.searchService.searchByTerm(this.search).pipe(take(1)).subscribe(res => {
        this.valueResponse.emit(res);
      });
    }
  }
}