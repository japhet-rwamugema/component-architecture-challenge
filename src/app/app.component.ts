import { Component, Directive, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPage, setPage } from './actions';
import { initialState } from './store';
import { LoginComponent } from './login/login.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { CompleteComponent } from './complete/complete.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';

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
  const component = this.appDynamicComponent.createComponent(LoginComponent)
  component.instance.navigateTo = this.navigate.bind(this)
  this.store.select(state => state.app.page).subscribe(page =>{
    this.pages = page
  }) 
}
navigate(){
  this.store.dispatch(setPage())
  if (this.pages>=0 && this.pages < this.components.length + 1) {
    this.pages,this.createComponent()
   }
}
createComponent(){
  const pageIndex = this.pages - 1
  this.appDynamicComponent.clear()
   const component = this.appDynamicComponent.createComponent(this.components[pageIndex])
   component.instance.navigateTo = this.navigate.bind(this)
}
}
