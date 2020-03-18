import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from './core/auth.guard';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
//import { InventoryListComponent } from './inventory-list/inventory-list.component';


const routes: Routes = [
  //{ path: "", pathMatch: "full", redirectTo: "login"},
  //{ path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  //{ path: "register", component: RegisterComponent, canActivate: [AuthGuard] },
  //{ path: "inventory-list", component: InventoryListComponent }
  { path: '', loadChildren: () => import('./admin-layout/admin-layout.module').then(m => m.AdminLayoutModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
