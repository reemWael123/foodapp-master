import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
constructor(private _UsersService:UsersService ,private _ToastrService:ToastrService){

}




ngOnInit(): void {
  this.ongetfavs()
}
favlist:any
cheak:boolean=false
ongetfavs(){
  
  this._UsersService.getfavs().subscribe({
    next:(res)=>{
      console.log(res)
      this.favlist=res
    if(this.favlist.data.length==0){
      this.cheak=true
    }
    
    }
   
  })
}
deletefav(id:number){
  this._UsersService.ondelete(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    complete:()=> {
      this.ongetfavs()
    },
  })
}
}
