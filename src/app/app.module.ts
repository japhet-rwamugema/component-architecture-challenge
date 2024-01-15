import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { StepComponent } from './step/step.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { SelectContentComponent } from './select-content/select-content.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    BannerComponent,
    LoginComponent,
    InputComponent,
    StepComponent,
    AddPhotoComponent,
    SelectContentComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
