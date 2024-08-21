import { CategoryComponent } from './../../admins/category/category.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../admins/category/servicss/category.service';
import { RecipeService } from '../../admins/recipes/services/recipe.service';
import { ViewComponent } from '../../admins/users/view/view.component';
import { ViewuserRecComponent } from '../component/viewuser-rec/viewuser-rec.component';
import { UserService } from '../../admins/users/user.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-recipe',
  templateUrl: './user-recipe.component.html',
  styleUrls: ['./user-recipe.component.scss']
})
export class UserRecipeComponent {
  disableSelect = new FormControl(false);
  constructor(private _RecipeService:RecipeService,private dialog: MatDialog,private _ToastrService:ToastrService,private _CategoryService:CategoryService,
    private _UserService:UsersService){

    
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
  

mylist2:any

     

    openviewDialog(myid:number,name:string,price:any,description:string): void {
      const dialogRef = this.dialog.open(ViewuserRecComponent, {
        data: {id:myid,name:name,price:price,description:description},
      });
      dialogRef.afterClosed().subscribe(result => {
   console.log(result)
     if(result){ 
  this.onaddfav(result)
     }
      });
    
    }
list:any
    onaddfav(id:number){
      this._UserService.addfav(id).subscribe({
        next:(res)=>{

console.log(res)

        }
      })
    }

    


}
