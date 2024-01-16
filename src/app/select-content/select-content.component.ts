import { Component } from '@angular/core';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-select-content',
  templateUrl: './select-content.component.html',
  styleUrl: './select-content.component.css'
})
export class SelectContentComponent {
 isInterest:boolean = false;
 constructor(private navigationService:NavigateService){}
 viewInterests(){
  this.isInterest = true;
 }
 navigateTo(){
  this.navigationService.navigateTo()
  }
}
