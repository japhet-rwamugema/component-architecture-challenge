import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input()
  text: string = ''

@Input()
  customClass: string = ''
@Output() onClickEvent:EventEmitter<void> = new EventEmitter<void>();
  onClick () {
    this.onClickEvent.emit();
  }
}
