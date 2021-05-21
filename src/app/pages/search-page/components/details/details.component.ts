import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detalles: any;
  picture: any;

  constructor(private searchService: SearchPageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const id = params.get('id') || 'No existe id';
      this.detalles = this.searchService.searchById(id)
      this.searchService.searchById(id).subscribe(res => {
        
        this.detalles = res;
      });
      this.picture = this.searchService.searchById(id).pipe(map(res=> {
        return res.item.picture;
      }))
    });
  }
}
