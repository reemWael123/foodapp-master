import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient:HttpClient) { }
  getcatgory(myPara:any):Observable<any>{
    return this._HttpClient.get('Category',{params:myPara})
  }
  addcatgory(data:string):Observable<any>{
    return this._HttpClient.post('Category',{name:data})
  }
  deletecatgory(id:number):Observable<any>{
    return this._HttpClient.delete(`Category/${id}`)
  }
  editcatgory(id:number,data:string):Observable<any>{
    return this._HttpClient.put(`Category/${id}`,{name:data})
  }
  viewcatgory(id:number):Observable<any>{
    return this._HttpClient.get(`Category/${id}`)
  }
}

