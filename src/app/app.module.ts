import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DynamicComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { InputComponent } from './components/input/input.component';
import { StepComponent } from './components/step/step.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { SelectContentComponent } from './components/select-content/select-content.component';
import { CompleteComponent } from './components/complete/complete.component';
import { componentReducer } from './store/store';

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
    CompleteComponent,
    DynamicComponent
    ]
,
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: componentReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
