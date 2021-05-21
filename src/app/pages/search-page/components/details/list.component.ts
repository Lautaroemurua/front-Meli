import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
    @Input() id:any;
  searchService: any;
  constructor() { }
  ngOnInit(): void {
    return this.searchService.searchById(this.id);
  }

}
