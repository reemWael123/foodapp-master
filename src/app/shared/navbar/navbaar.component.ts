import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangepassComponent } from '../changepass/changepass.component';
import { SharedService } from '../service/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbaar',
  templateUrl: './navbaar.component.html',
  styleUrls: ['./navbaar.component.scss']
})
export class NavbaarComponent {
  Username=localStorage.getItem('userName')
  userrole=localStorage.getItem('role')
  erroMsg:string="";
  erroMsg2:string="";
  erroMsg3:string="";
  constructor(private dialog:MatDialog ,private _SharedService:SharedService,private _router:Router ,private _ToastrService:ToastrService){}

  
  openchangDialog(): void {
    const dialogRef = this.dialog.open(ChangepassComponent, {
      data: {},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        this.onchange(result)
      ;}
      
    });}
onchange(data:any){
this._SharedService.changepass(data).subscribe({
  next:(res)=>{
    console.log(res)
  }
  ,
  error:(err)=>{
    console.log(err)
        this.erroMsg=err.error.additionalInfo.errors.confirmNewPassword,
        this.erroMsg2=err.error.additionalInfo.errors.newPassword
        this.erroMsg3=err.error.additionalInfo.errors.oldPassword

        console.timeLog(this.erroMsg)
        this._ToastrService.warning(this.erroMsg)
        this._ToastrService.warning(this.erroMsg2)
        this._ToastrService.warning(this.erroMsg3)
       },
       complete:()=> {
        console.log('completed')
         this._ToastrService.success("success")
         
       },
     
})
}
logout(){
  localStorage.clear()
  this._router.navigate(['/auth/login'])
}
  }
