import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent {
  constructor(
    public dialogRef: MatDialogRef<ChangepassComponent>,private _SharedService:SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  changeform:FormGroup=new FormGroup({
    oldPassword:new FormControl('',[Validators.required]),
      newPassword:new FormControl('',[Validators.required]),
      confirmNewPassword:new FormControl('',[Validators.required]),
    })
    // onchange(data:FormGroup){
    //   this._SharedService.changepass(data).subscribe({
    //     next:(res)=>{
    //       console.log(res)
    //     }
    //   })
    //   }
}
