import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() data: any;
  constructor(public router: Router) { }

  showDetails(id: string) {
    this.router.navigate(['search/item'], {
      queryParams: {
        id
      }
    })
  }

}
