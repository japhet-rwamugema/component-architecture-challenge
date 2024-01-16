import { Component, Directive, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { setPage } from './store/actions';
import { initialState } from './store/store';
import { LoginComponent } from './components/login/login.component';
import { SelectContentComponent } from './components/select-content/select-content.component';
import { CompleteComponent } from './components/complete/complete.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';

export  interface AppState {
  app:initialState
}
@Directive({
  selector:'[appDynamicComponent]',
})
export class DynamicComponent{
constructor(private viewContainerRef: ViewContainerRef){}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations:[]
})
export class AppComponent {
  @ViewChild(DynamicComponent, {static: true, read: ViewContainerRef}) appDynamicComponent!: ViewContainerRef
pages = 0
components = [AddPhotoComponent,SelectContentComponent, CompleteComponent ]
constructor(private store: Store<AppState>){}

ngOnInit(){
  //create login component as the entry component
  const component = this.appDynamicComponent.createComponent(LoginComponent)
  component.instance.navigateTo = this.navigate.bind(this)
  this.store.select(state => state.app.page).subscribe(page =>{
    this.pages = page
  }) 
}
navigate(){
  // update page state and create the component
  this.store.dispatch(setPage())
  if (this.pages>=0 && this.pages < this.components.length + 1) {
    this.createComponent()
   }
}
createComponent(){
  //create component when the page is equal to the component index
  const pageIndex = this.pages - 1
  this.appDynamicComponent.clear()
   const component = this.appDynamicComponent.createComponent(this.components[pageIndex])
   component.instance.navigateTo = this.navigate.bind(this)
}
}
