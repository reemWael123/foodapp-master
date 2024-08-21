import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../category/servicss/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {
  




  recipeform=new FormGroup({
    name:new FormControl(null),
    description :new FormControl(null),
    price:new FormControl(null),
    tagId :new FormControl(null),
    // recipeImage:new FormControl(null),
    categoriesIds:new FormControl(null),

  })
  pageId:number=0;
  resdetails:any;
  constructor(private _RecipeService:RecipeService,private dialog: MatDialog,private _ToastrService:ToastrService,private _CategoryService:CategoryService,
    private _Router:Router,private _ActivatedRoute:ActivatedRoute){
      this.pageId=this._ActivatedRoute.snapshot.params['id']
      if(this.pageId){
        this.getRecipeById(this.pageId)
      }
    }

    getRecipeById(id:number){
      this._RecipeService.getrecipeById(id).subscribe({
        next:(res)=>{
          console.log(res)
          this.resdetails=res
        },
        error:()=>{
        },
        complete:()=>{
          // Handle image
        if (this.resdetails.imagePath) {
          this._RecipeService.loadImage(this.resdetails.imagePath, this.files);
        }
this.srcimg=this.resdetails.imagePath   
this.recipeform.patchValue({
  name:this.resdetails.name,
  description:this.resdetails.description,
  price:this.resdetails.price,
  tagId :this.resdetails.tag.id ,
  categoriesIds:this.resdetails.category.map((c:any)=>c.id)
})
        }
      })
    }


  mylist:any
  searchkey:string=''
  taglist:any[]=[]
  mycat:any[]=[]
  tagId:any
  categoryId:any
 
  files: File[] = [];
srcimg:any
onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
this.srcimg=this.files[0]
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

  ngOnInit() {
  
    this.ongettag()
    this.ongetcat()
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
  senddata(data:FormGroup){
    console.log(data.value)
    let myformdata= new FormData()
    myformdata.append('name',data.value.name)
    myformdata.append('description',data.value.description)
    myformdata.append('price',data.value. price)
    myformdata.append('tagId',data.value.tagId)
    myformdata.append('categoriesIds',data.value.categoriesIds)
    myformdata.append('recipeImage',this.srcimg)


    if(this.pageId){
      this._RecipeService.editrec(myformdata,this.pageId).subscribe({
        next:(res)=>{
          console.log(res)
        }
      })
    }
     else{  this._RecipeService.addrec(myformdata).subscribe({
      next:(res)=>{
        console.log(res)
      },
      complete:()=> {
        console.log('completed')
         this._ToastrService.success("Added successfully")
         this._Router.navigate(['/dashboard/admins/recipes'])
       },

    })}
  
  }

}
