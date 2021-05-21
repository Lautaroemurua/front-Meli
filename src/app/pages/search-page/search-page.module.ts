import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent } from './components/list/list.component';
import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page.routing.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    SearchPageComponent, ListComponent, DetailsComponent
  ],
  imports: [
    BrowserModule,
    SearchPageRoutingModule,
    FormsModule,
  ]
})
export class SearchPageModule { }
