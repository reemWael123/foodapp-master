import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from '../interface/ilogin';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role:string|null=''
  constructor(private _HttpClient:HttpClient ,private _router:Router){
    if(localStorage.getItem('userToken')!==null){
this.getProfile() //علشان محدش يغير في ال local storage
    }
  }
getProfile(){
  let token:any = localStorage.getItem('userToken');
let decoded:any = jwtDecode(token);
console.log(decoded)
localStorage.setItem('userEmail',decoded.userEmail)
localStorage.setItem('role',decoded.userGroup)
localStorage.setItem('userName',decoded.userName)
this.getRole()
}

getRole(){
  if(localStorage.getItem('userToken')!==null&&
  localStorage.getItem('role')!==null
){
this.role=localStorage.getItem('role') //حطيتو في متغير علشان لو هعمل بيه cheak
  
}

}
  Onlogin(data:Ilogin):Observable<any>{
    return this._HttpClient.post('Users/Login',data)

  }
  Onregister(data:any):Observable<any>{
    return this._HttpClient.post('Users/Register',data)

  }
  Onverify(data:any):Observable<any>{
    return this._HttpClient.put('Users/verify',data)

  }
  logout(){
    localStorage.clear()
    this._router.navigate(['/auth/login'])
  }
  forget(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request',data)
  }
  reset(data:any):Observable<any>{
    return this._HttpClient.post('Users/Reset',data)
  }
}
