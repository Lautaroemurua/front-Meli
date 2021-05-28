import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/search-interface';
import { SearchPageService } from '../../services/search-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  search: string | undefined = '';
  errorMessage: any;
  @Input() searchType: string | undefined;
  @Output() termEmit = new EventEmitter<Item[]>();
  
  constructor(private searchService: SearchPageService, private router: Router) { }
  ngOnInit(): void {
    this.searchService.getTerm().subscribe(res => {
      this.search = res;
    })
  }

  searchByTerm(term: string) {
    this.searchService.searchByTerm(term)
  }

  onSubmit() {
    const url = this.router.url;
    this.searchService.searchByTerm(this.search).subscribe(res => {
      this.searchService.setTerm(this.search);
      if (url === '/') {
        this.emitValue(res);
      } else {
        this.searchService.setItemData(res)
        this.router.navigate(['/']);
      }
    })
  }
  
  emitValue(items: Item[]) {
    this.termEmit.emit(items);
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }

}