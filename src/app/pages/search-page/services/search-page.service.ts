import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, SearchInterface } from '../models/search-interface';
import { FindInterface } from '../models/find-interface';


@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Item[]> {
    const url = `http://localhost:3002/items?search=${term}`;
    const response = this.http.get<SearchInterface>(url).pipe(map(res => {
      return res.item
    }));
    return response;
  }

  searchById(id: string): Observable<FindInterface> {
    const url = `http://localhost:3002/items/${id}`;
    const response = this.http.get<FindInterface>(url).pipe(map(res => res));

    return response;
  }

}