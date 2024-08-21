import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent ,
  children:[
  { path: 'user-recipe', 
    loadChildren: () => import('./user-recipe/user-recipe.module').then(m => m.UserRecipeModule) }, 
  { path: 'fav',
     loadChildren: () => import('./fav/fav.module').then(m => m.FavModule) }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
