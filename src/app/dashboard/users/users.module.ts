import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewuserRecComponent } from './component/viewuser-rec/viewuser-rec.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewuserRecComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  SharedModule
  ]
})
export class UsersModule { }
