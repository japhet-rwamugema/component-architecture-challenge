import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [{
  path:'', component: LoginComponent
  
}, {
  path: 'add-photo', component: AddPhotoComponent
}, {
  path:'select', component: SelectContentComponent
},{
  path:'last-page', component: CompleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
