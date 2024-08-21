import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditComponent } from './components/add-edit/add-edit.component';


@NgModule({
  declarations: [
    RecipesComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
  ]
})
export class RecipesModule { }
