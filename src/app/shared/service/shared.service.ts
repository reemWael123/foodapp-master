import { GetprofileComponent } from './../../dashboard/component/getprofile/getprofile.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _HttpClient:HttpClient) { }
  changepass(data:any):Observable<any>{
    return this._HttpClient.put('Users/ChangePassword',data)
  }
  Getprofile():Observable<any>{
    return this._HttpClient.get('Users/currentUser')
  }
  updatePofile(data:any):Observable<any>{
    return this._HttpClient.put('Users',data)
  }
}
