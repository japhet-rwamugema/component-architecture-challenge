import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.component';
import { getPage, setPage } from '../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  pages$ = this.store.select(state => state.app.page)

  constructor(private store: Store<AppState>){}
  navigateToNextPage(){
    this.store.dispatch(setPage())
   this.pages$.subscribe(state=>{
    console.log(state);
    
   })
   
  }
}
