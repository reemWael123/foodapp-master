import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { userGuard } from '../core/interceptors/guards/user.guard';
import { adminGuard } from '../core/interceptors/guards/admin.guard';
import { HomeComponent } from '../shared/components/home/home.component';
import { GetprofileComponent } from './component/getprofile/getprofile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
     { path: 'users',canActivate:[userGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'admins', canActivate:[adminGuard], loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
 { path: 'getprofile', component:GetprofileComponent}] }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
