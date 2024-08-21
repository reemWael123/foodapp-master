import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewuser-rec',
  templateUrl: './viewuser-rec.component.html',
  styleUrls: ['./viewuser-rec.component.scss']
})
export class ViewuserRecComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewuserRecComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
