import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { UsersService } from '../../users/service/users.service';
import { UserService } from './user.service';
import { ViewComponent } from './view/view.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  constructor(private dialog: MatDialog,private _UsersService:UserService)
  {
    this.ongetuser()
  }
  pageSize = 10;
  pageIndex = 0;
    mylist:any
 searchkey:string=''
 group:number|string=''
 selectsearch:string=''
 

 ongetuser(){

  let data=
  {
    pageSize:this.pageSize,
  [this.selectsearch]:this.searchkey,
    pageNumber:this.pageIndex,
    groups:this.group
 }
 this._UsersService.getusers(data).subscribe({
  next:(res)=>{
    console.log(res)
    this.mylist=res
  }
 })

}
 handlePageEvent(e: PageEvent) {
  // this.pageEvent = e;
console.log(e)

  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.ongetuser()
}

opendeleteDialog(myid:number): void {
  const dialogRef = this.dialog.open(DeleteComponent, {
    data: {text:'user',id:myid},
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log( "my"+result);
if(result){
this.ondelete(result)
}
  });
}
ondelete(id:number){
this._UsersService.deleteuser(id).subscribe({
  next:(res)=>{
    console.log(res)
  },complete:()=>{
this.ongetuser()
  },

})
}

openviewDialog(userData:any): void {
  const dialogRef = this.dialog.open(ViewComponent, {
    data:userData, 
  });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log( "my"+result);
// if(result){
// this.ondelete(result)
// }
  // });
}


}
