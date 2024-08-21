import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


interface Imenu{
  text:string;
  icon:string;
  link:string;
  isActive:boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
mymenu:Imenu[]=[
  {  text:'Home',
    icon:"fa-solid fa-house-chimney-user",
    link:"home",
    isActive:true
    
  },
  {  text:'Users',
    icon:"fa-solid fa-user",
    link:"/dashboard/admins/users",
    isActive:this.anAdmin()
  },
  {  text:'Recipes',
    icon:"fa-solid fa-house-chimney-user",
    link:"/dashboard/admins/recipes",
    isActive:this.anAdmin()
  }
  ,{  text:'Categories',
    icon:"fa-solid fa-house-chimney-user",
    link:"/dashboard/admins/category",
    isActive:this.anAdmin()
  } ,{  text:'favs',
    icon:"fa-solid fa-house-chimney-user",
    link:"/dashboard/users/fav",
    isActive:this.isUser()
  } ,{  text:'User Recipes',
    icon:"fa-solid fa-house-chimney-user",
    link:"/dashboard/users/user-recipe",
    isActive:this.isUser()
  }



]
constructor(private _AuthService:AuthService,private _router:Router){}
anAdmin():boolean{
  return this._AuthService.role=='SuperAdmin'?true:false
}
isUser():boolean{
  return this._AuthService.role ==  'SystemUser'? true : false
}

}
