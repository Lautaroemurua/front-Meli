import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item, SearchInterface } from '../models/search-interface';
import { FindInterface } from '../models/find-interface';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  itemData: Item[] | undefined;
  term: string | undefined;

  constructor(private http: HttpClient) { }

  searchByTerm(term: string | undefined): Observable<Item[]> {
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

  setItemData(obj: Item[] | undefined) {
    this.itemData = obj;
  }

  getItemData(): Observable<Item[] | undefined> {
    return of(this.itemData);
  }

  setTerm(term: string) {
    this.term = term;
  }

  getTerm(): Observable<string | undefined> {
    return of(this.term);
  }

}