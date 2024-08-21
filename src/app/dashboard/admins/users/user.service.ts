import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private _HttpClient:HttpClient) { }
  getusers(myPara:any):Observable<any>{
    return this._HttpClient.get('Users',{params:myPara})
  } 
  deleteuser(id:number):Observable<any>{
    return this._HttpClient.delete(`Users/${id}`)
  }
}
