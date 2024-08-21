import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/interceptors/guards/auth.guard';

const routes: Routes = [

  {path:'',redirectTo:'auth',pathMatch:"full"},

  
  { path: 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
     { path: 'dashboard',canActivate:[authGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
