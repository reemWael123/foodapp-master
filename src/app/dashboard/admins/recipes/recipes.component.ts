import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { AddEditComponent } from '../category/component/add-edit/add-edit.component';
import { EditComponent } from '../category/component/edit/edit.component';
import { ViewComponent } from '../category/component/view/view.component';
import { CategoryService } from '../category/servicss/category.service';
import { RecipeService } from './services/recipe.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  disableSelect = new FormControl(false);
  constructor(private _RecipeService:RecipeService,private dialog: MatDialog,private _ToastrService:ToastrService,private _CategoryService:CategoryService){

    
  }

  mylist:any
 searchkey:string=''
 taglist:any[]=[]
 mycat:any[]=[]
 tagId:any
 categoryId:any

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
    this.ongetrec()
  }
  ngOnInit() {
    this.ongetrec()
    this.ongettag()
    this.ongetcat()
  }
  ongetrec(){
    let dataParams=
    {
      pageSize:this.pageSize
      ,pageNumber:this.pageIndex
      ,name:this.searchkey
      , tagId:this.tagId
      ,categoryId:this.categoryId
    };
    this._RecipeService.getrecipe(dataParams).subscribe({
      next:(res)=>{
        console.log(res)
        this.mylist=res
        console.log(this.mylist)
      }
    })
  }
  ongettag(){
    this._RecipeService.gettags().subscribe({
      next:(res)=>{
        console.log(res)
        this.taglist=res
      }
    })
  }
  ongetcat(){
    this._CategoryService.getcatgory({pageSize:1000,pageNumber:1}).subscribe({
      next:(res)=>{
        console.log(res)
        this.mycat=res.data
        console.log(this.mycat)
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
    this._RecipeService.deleterec(id).subscribe({ 
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
