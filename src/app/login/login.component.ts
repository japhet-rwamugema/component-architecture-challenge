import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.component';
import { getPage, setPage } from '../actions';
import { NavigateService } from '../navigate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
//  @Output() navigate:EventEmitter<any>  = new EventEmitter();
  constructor(private navigateService: NavigateService){}
  navigateTo(){
    this.navigateService.navigateTo()
  }
}
