import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { SharedModule } from 'src/app/shared/shared.module';

// import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AdminsComponent,
    // CategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    SharedModule
    
  ]
})
export class AdminsModule { }
