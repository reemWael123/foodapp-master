import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { ResetComponent } from './component/reset/reset.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  {path:'regester',component:RegisterComponent},
  {path:'Forget',component:ForgetpassComponent},
  {path:'reset',component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
