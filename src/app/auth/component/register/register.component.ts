import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component';
import { compileDeclareClassMetadata } from '@angular/compiler';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isHide:boolean=true;
  erroMsg:string="";
  proimg:any;
  code:string=""
  
  
  constructor(private _AuthService:AuthService , private _ToastrService:ToastrService,private _router:Router,private dialog:MatDialog ){}
  regform:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^\w{6}$/)]),
    userName:new FormControl('',[Validators.required]),
    country:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
  })
  
whenregister(data:FormGroup):void{
  let myForm=new FormData;
  myForm.append(' email',data.value.email)
  myForm.append(' userName',data.value. userName)
  myForm.append('  password',data.value. password)
  myForm.append(' country',data.value.country)
  myForm.append(' phoneNumber',data.value.phoneNumber)
  myForm.append(' confirmPassword',data.value.confirmPassword)
  myForm.append('profileImage',this.proimg)
 this._AuthService.Onregister(data.value).subscribe({
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
     this.openDialog()
   },
 
 })
 
}
files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
this.proimg=this.files[0]
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


openDialog(): void {
  const dialogRef = this.dialog.open(VerifyComponent, {
    data: {email:this.regform.value.email,code:this.code},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if (result) {
      this.onver(result);}
    
  });}

  onver(data:any){
  this._AuthService.Onverify(data).subscribe({
    next:(res)=>{
    console.log(res)
    
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