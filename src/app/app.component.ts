import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPage } from './actions';
import { initialState } from './store';

export  interface AppState {
  app:initialState
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
pages = 0

constructor(private store: Store<AppState>){}
navigateToNextPage(){
  this.store.dispatch(getPage())
  this.store.select(state => state.app.page).subscribe(page =>{
    this.pages = page
  })
}
}
