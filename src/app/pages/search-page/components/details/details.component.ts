import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FindInterface } from '../../models/find-interface';
import { Item } from '../../models/search-interface';

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

  constructor(private searchService: SearchPageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const id = params.get('id') || 'No existe id';
      this.detalles = this.searchService.searchById(id)
      this.searchService.searchById(id).pipe(map(res=> {
        this.detailsObj = res
        console.log(res);
        return this.detailsObj
      }))
      
    });
  }
}
