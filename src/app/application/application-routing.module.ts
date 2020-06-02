import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';
import { ItemListComponent } from './item-list/item-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: ApplicationComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'prefix' },
      { path: 'listitems', component: ItemListComponent },
      { path: 'home', component: HomeComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
