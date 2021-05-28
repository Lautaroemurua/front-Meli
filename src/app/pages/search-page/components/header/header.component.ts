import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/search-interface';
import { SearchPageComponent } from '../../search-page.component';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  search: string = '';
  errorMessage: any;
  @Input() searchType: string | undefined;
  @Output() termEmit = new EventEmitter<string>();
  
  constructor(private searchService: SearchPageService, private router: Router) { }
  onSubmit() {
    this.searchService.setTerm(this.search);
    this.searchService.searchByTerm(this.search).subscribe(res => {
      this.searchService.setItemData(res)
      this.router.navigate(['/']);
    })
  }
  
  emitValue(val: string) {
    this.termEmit.emit(val);
  }

}