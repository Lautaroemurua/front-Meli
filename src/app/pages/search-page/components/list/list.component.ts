import { Component, Input } from '@angular/core';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() data:any;
  constructor(private searchService: SearchPageService) { }

  showDetails(id: string) {
    const response = this.searchService.searchById(id);
    console.log(response);
  }

}
