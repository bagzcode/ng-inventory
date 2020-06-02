import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent,
              children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
                { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
                { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
              ]           
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
