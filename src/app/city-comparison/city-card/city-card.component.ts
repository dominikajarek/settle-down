import { LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CityNamePipe } from './city-name.pipe';

@Component({
  selector: 'app-city-card',
  imports: [CardModule, ButtonModule, LowerCasePipe, CityNamePipe],
  templateUrl: './city-card.component.html',
  styleUrl: './city-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'card-container' },
})
export class CityCardComponent {
  city = input<any>();

  constructor() {
    console.log(this.city());
  }
}
