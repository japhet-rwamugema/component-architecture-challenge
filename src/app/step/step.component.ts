import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrl: './step.component.css'
})
export class StepComponent {
@Input() index: number = 0

hasBackArrow: boolean = false

ngOnInit() {
  if (this.index > 1) {
    this.hasBackArrow = true
  }
}
}
