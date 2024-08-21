import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})

export class VerifyComponent {
  username:string='';
  constructor(
    public dialogRef: MatDialogRef<VerifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log('ana pop up',data)
this.username=data.name
  }
    onNoClick(): void {
    this.dialogRef.close();
  }
}

