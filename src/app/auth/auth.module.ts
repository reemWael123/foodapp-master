import { VerifyComponent } from './component/verify/verify.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { SharedModule } from '../shared/shared.module';


import { ForgetpassComponent } from './component/forgetpass/forgetpass.component';
import { ResetComponent } from './component/reset/reset.component';
@NgModule({
  declarations: [
    AuthComponent,
   
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    ForgetpassComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
 
    // BrowserAnimationsModule,
    // ToastrModule.forRoot(), 
  ]
})
export class AuthModule { }
