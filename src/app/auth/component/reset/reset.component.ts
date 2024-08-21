import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  erroMsg:string="";
  constructor(private _AuthService:AuthService , private _ToastrService:ToastrService,private _router:Router){}
  resetform:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
    seed:new FormControl('',[Validators.required]),
  })
whenres(data:FormGroup):void{
 this._AuthService.reset(data.value).subscribe({
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
     this._router.navigate(['/auth/login'])
   },
 
 })
 
}
}
