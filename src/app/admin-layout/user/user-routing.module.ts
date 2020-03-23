import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: '', redirectTo: 'list' },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
