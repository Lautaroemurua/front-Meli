import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/item-interface';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detalles: Item[] | undefined;

  constructor(private searchService: SearchPageService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      const id = params.get('id') || 'No existe id';
      this.searchService.searchById(id).subscribe(res => {
        this.detalles = res;
      });
    });
  }
}
