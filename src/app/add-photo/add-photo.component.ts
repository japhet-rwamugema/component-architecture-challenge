import { Component } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {
  onUploadPhoto:boolean = false;
upload(){
this.onUploadPhoto = true;
}
}
