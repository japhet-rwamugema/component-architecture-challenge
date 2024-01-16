import { EventEmitter, Injectable, Input, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavigateService {
    @Output() navigate:EventEmitter<any>  = new EventEmitter();
  navigateTo(){
    this.navigate.emit()
  }
}