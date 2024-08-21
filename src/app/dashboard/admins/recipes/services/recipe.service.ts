import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient:HttpClient ,private _toastr:ToastrService) { }
 getrecipe(myPara:any):Observable<any>{
    return this._HttpClient.get('Recipe',{params:myPara})
  } 
  gettags():Observable<any>{
    return this._HttpClient.get('tag')
  }

  addrec(data:FormData):Observable<any>{
    return this._HttpClient.post('Recipe',data)
  }
  getrecipeById(id:number):Observable<any>{
    return this._HttpClient.get(`Recipe/${id}`)
  } 
  
  editrec(data:FormData,id:number):Observable<any>{
    return this._HttpClient.put(`Recipe/${id}`,data)
  }
  deleterec(id:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${id}`)
  }
  imageUrl:any='https://upskilling-egypt.com:3006/'
  
  getImagePath(imagePath: string): string {
    
    return this.imageUrl + imagePath;
  }

  loadImage(imagePath: string, files: any[]): void {
    // Construct the full URL to the image
    const imageUrl = this.getImagePath(imagePath);

    // Fetch the image
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a File object from the Blob
        const file = new File([blob], 'image.jpg', { type: blob.type });

        // Set the file in the dropzone
        files.push(file);
      })
      .catch((error) => {
        this._toastr.error('Failed to load image');
      });
  }
}
