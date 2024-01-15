import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { CompleteComponent } from './complete/complete.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:'', component: AppComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
