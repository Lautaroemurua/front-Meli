import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { SearchPageComponent } from './search-page.component';

const routes: Routes = [{
  path: '',
  component: SearchPageComponent
},
{
  path: 'search/item',
  component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
