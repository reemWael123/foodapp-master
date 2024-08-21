import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
constructor(private _HttpClient:HttpClient){}
addfav(id:any):Observable<any>{
  return this._HttpClient.post('userRecipe',{recipeId:id})
}
getfavs():Observable<any>{
  return this._HttpClient.get('userRecipe')
}
ondelete(id:number):Observable<any>{
  return this._HttpClient.delete(`userRecipe/${id}`)
}
}
