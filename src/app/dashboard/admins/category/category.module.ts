import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';


@NgModule({
  declarations: [
    CategoryComponent,
    AddEditComponent,
    EditComponent,
    ViewComponent 
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
