import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbaarComponent } from './navbar/navbaar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { CategoryComponent } from '../dashboard/admins/category/category.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { DeleteComponent } from './delete/delete.component';
import {MatSelectModule} from '@angular/material/select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ChangepassComponent } from './changepass/changepass.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SppinerComponent } from './components/sppiner/sppiner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SharedComponent,
    NavbaarComponent,
    SidebarComponent,
    HomeComponent,
    DeleteComponent,
    ChangepassComponent,
    SppinerComponent,
  
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule, 
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    NgxDropzoneModule,
    NgxSpinnerModule,
  
 

  ],
  exports:[ ReactiveFormsModule,NavbaarComponent,SidebarComponent,RouterModule,HomeComponent,MatDialogModule,MatFormFieldModule,FormsModule
    ,MatInputModule,MatPaginatorModule,MatMenuModule,MatIconModule,MatSelectModule,NgxDropzoneModule,ChangepassComponent
  ]
})
export class SharedModule { }
