import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FindInterface } from '../../models/find-interface';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detalles: Observable<FindInterface> | undefined;
  picture: Observable<string> | undefined;

  detailsObj:FindInterface | undefined;
  search = '';
  items: Observable<any> | undefined;
  errorMessage: any = undefined;
  constructor(private searchService: SearchPageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const id = params.get('id') || 'No existe id';
      this.detalles = this.searchService.searchById(id)
      this.searchService.searchById(id).pipe(map(res=> {
        this.detailsObj = res
        return this.detailsObj
      }))

    });
  }

  onSubmit() {
    this.items = this.searchService.searchByTerm(this.search).pipe(map(res => { return res }), catchError((err: HttpErrorResponse) => {
      this.errorMessage = err;
      return throwError(err);
    }));
  }
}
