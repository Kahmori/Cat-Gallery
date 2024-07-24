import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'card-element',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() wikipediaUrl: string = '';
}