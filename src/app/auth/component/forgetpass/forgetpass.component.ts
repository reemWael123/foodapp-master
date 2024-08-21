import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent {
  erroMsg:string="";
  constructor(private _AuthService:AuthService , private _ToastrService:ToastrService,private _router:Router){}
  forgetform:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  
  })
whenforget(data:FormGroup):void{
 this._AuthService.forget(data.value).subscribe({
  next:(responce)=> {
    console.log(responce)

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
     this._router.navigate(['/auth/reset'])
   },
 
 })
 
}
}
