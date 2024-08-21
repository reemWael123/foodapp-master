import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins.component';


const routes: Routes = [{ path: '', component: AdminsComponent},
   { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
   { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
   { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
