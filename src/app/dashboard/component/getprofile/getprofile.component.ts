import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/service/shared.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RecipeService } from '../../admins/recipes/services/recipe.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-getprofile',
  templateUrl: './getprofile.component.html',
  styleUrls: ['./getprofile.component.scss']
})
export class GetprofileComponent implements OnInit {
  profilList:any
  profileimg:any
  erroMsg:string="";
constructor(private _SharedService:SharedService,private _RecipeService:RecipeService,private _ToastrService:ToastrService){}
profileform=new FormGroup({
  userName:new FormControl(null),
  email :new FormControl(null),
  country:new FormControl(null),
  phoneNumber :new FormControl(null),
  imagePath:new FormControl(null),
  group:new FormControl(null),
  confirmPassword:new FormControl(null),
})

ngOnInit(): void {
  this.ongetprofile()
}
ongetprofile(){
  this._SharedService.Getprofile().subscribe({
    next:(res)=>{
      console.log(res)
  this.profilList=res
    },
    complete:()=>{
      if (this.profilList.imagePath) {
        this._RecipeService.loadImage(this.profilList.imagePath, this.files);
      }
      this.profileform.patchValue({
        userName:this.profilList.userName,
      email:this.profilList.email,
        country:this.profilList.country,
        phoneNumber:this.profilList.phoneNumber ,
        group:this.profilList.group.name
      })
  }})
}
whenupdate(data:FormGroup):void{
  let myForm=new FormData;
  myForm.append('userName',data.value.userName)
  myForm.append('email',data.value. email)

  myForm.append('country',data.value.country)
  myForm.append('phoneNumber',data.value.phoneNumber.toString())
  myForm.append('group',data.value.group)
  myForm.append('confirmPassword',data.value.confirmPassword)
  myForm.append('profileImage',this.profileimg)
 this._SharedService.updatePofile(myForm).subscribe({
  next:(responce)=> {
    console.log(responce)

  }
,  error:(err)=>{
  console.log(err)
      this.erroMsg=err.error.message;
      console.timeLog(this.erroMsg)
      this._ToastrService.warning(this.erroMsg)
     },
     complete:()=> {
      console.log('completed')
       this._ToastrService.success("success")
       
     },
   

}
)}
files: File[] = [];

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
this.profileimg=this.files[0]
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event),1);
}
}