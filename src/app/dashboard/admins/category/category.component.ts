import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { CategoryService } from './servicss/category.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  constructor(private _CategoryService:CategoryService,private dialog: MatDialog,private _ToastrService:ToastrService){

    
  }
  mylist:any
 searchkey:string=''

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
 
  // pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    // this.pageEvent = e;
console.log(e)
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.ongetcat()
  }
  ngOnInit() {
    this.ongetcat()
  }
  ongetcat(){
    this._CategoryService.getcatgory({pageSize:this.pageSize,pageNumber:this.pageIndex,name:this.searchkey}).subscribe({
      next:(res)=>{
        console.log(res)
        this.mylist=res
        console.log(this.mylist)
      }
    })
  }
  openCatDialog(): void {
    const dialogRef = this.dialog.open(AddEditComponent, {
      data: {name:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
   if(result){
this.onadd(result)
   }
    });
  }
  onadd(val:string){
    this._CategoryService.addcatgory(val).subscribe({
      next:(res)=>{
        console.log(res)
      },
      complete:()=> {
        console.log('completed')
         this._ToastrService.success("Added successfully")
       
       },
    })
  }

  opendeleteDialog(myid:number): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {text:'category',id:myid},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log( "my"+result);
 if(result){
this.ondelete(result)
 }
    });
  }
  ondelete(id:number){
    this._CategoryService.deletecatgory(id).subscribe({ 
      next:(res)=>{
        console.log(res)
      }
     })}
mylist2:any

     openeditDialog(myid:number): void {
      const dialogRef = this.dialog.open(EditComponent, {
        data: {name:'',id:myid},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        console.log(myid)
     if(result){
  this.onedit(result,myid)
     }
      });
    
    }
    onedit(val:string,id:number){
      this._CategoryService.editcatgory(id,val).subscribe({
        next:(res)=>{
this.mylist2=res


          console.log(this.mylist2)
        }
      })
    }

    openviewDialog(myid:number,name:string,creation:any,madification:any): void {
      const dialogRef = this.dialog.open(ViewComponent, {
        data: {id:myid,name:name,creationDate:creation,modificationDate:madification},
      });
      dialogRef.afterClosed().subscribe(result => {
   console.log(result)
     if(result){ 
  this.onview(result)
     }
      });
    
    }
list:any
    onview(id:number){
      this._CategoryService.viewcatgory(id).subscribe({
        next:(res)=>{
this.list=res
console.log(this.list)

        }
      })
    }

    
}
