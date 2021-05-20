import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent } from './components/list/list.component';
import { SearchPageComponent } from './search-page.component';
import { SearchPageRoutingModule } from './search-page.routing.module';
import { SearchPageService } from './services/search-page.service';

@NgModule({
  declarations: [
    SearchPageComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    SearchPageRoutingModule,
    FormsModule
  ]
})
export class SearchPageModule { }
