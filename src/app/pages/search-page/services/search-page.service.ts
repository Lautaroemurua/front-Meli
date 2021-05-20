import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Items } from '../models/items-interface';
import { Search } from '../models/search-interface';
import { Item } from '../models/item-interface';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Item[]> {
    const url = `http://localhost:3002/items?search=${term}`;
    const response = this.http.get<Search>(url).pipe(map(res => res.item));
    return response;
  }

  searchById(id: string): Observable<Item[]> {
    const url = `http://localhost:3002/items/${id}`;
    const response1 = this.http.get<Search>(url).pipe(map(res => res.item));
    const response2 = this.http.get<Search>(`${url}/description`).pipe(map(res => res.item));
    console.log(response1);
    console.log(response2);
    return response1;
  }

}