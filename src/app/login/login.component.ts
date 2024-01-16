import { Component, EventEmitter, Output } from '@angular/core';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private navigateService: NavigateService){}
  navigateTo(){
    this.navigateService.navigateTo()
  }
}
