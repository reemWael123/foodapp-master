import { Component } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  erroMsg:string="";
  constructor(private _AuthService:AuthService , private _ToastrService:ToastrService,private _router:Router){}
  loginform:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6}$/)]),
  })
whenlog(data:FormGroup):void{
 this._AuthService.Onlogin(data.value).subscribe({
  next:(responce)=> {
    console.log(responce)
    localStorage.setItem('userToken',responce.token)
    this._AuthService.getProfile()

  },
  error:(err)=>{
console.log(err)
    this.erroMsg=err.error.message;
    console.timeLog(this.erroMsg)
    this._ToastrService.warning(this.erroMsg)
   },
   complete:()=> {
    console.log('completed')
     this._ToastrService.success("success")
     this._router.navigate(['/dashboard'])
   },
 
 })
 
}
}
