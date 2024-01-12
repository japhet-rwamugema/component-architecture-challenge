import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input() cardTitle: string = ''
 @Input() cardIcon: string = ''
 @Input() cardClass: string = ''
 @Input() cardBackgroundColor: string = ''
 @Input() cardBorderColor: string = ''
}
