import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Items } from '../models/items-interface';
import { Search } from '../models/search-interface';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Items[]> {
    const url = `http://localhost:3002/items?search=${term}`;
    const response = this.http.get<Search>(url).pipe(map(res => res.item));
    return response;
  }

}