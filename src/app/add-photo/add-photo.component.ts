import { Component } from '@angular/core';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css'
})
export class AddPhotoComponent {
  onUploadPhoto:boolean = false;
  constructor(private navigationService:NavigateService){}
upload(){
this.onUploadPhoto = true;
}
navigateTo(){
this.navigationService.navigateTo()
}
}
