import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { SelectContentComponent } from './components/select-content/select-content.component';
import { CompleteComponent } from './components/complete/complete.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:'', component: AppComponent
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
