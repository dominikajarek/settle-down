import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CityCardComponent } from './city-card/city-card.component';
import toronto from '../shared/cities/toronto.json';
import vancouver from '../shared/cities/vancouver.json';
import montreal from '../shared/cities/montreal.json';
import calgary from '../shared/cities/calgary.json';
import ottawa from '../shared/cities/ottawa.json';
import edmonton from '../shared/cities/edmonton.json';
import winnipeg from '../shared/cities/winnipeg.json';
import quebec from '../shared/cities/quebec.json';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-city-comparison',
  imports: [CityCardComponent, KeyValuePipe],
  templateUrl: './city-comparison.component.html',
  styleUrl: './city-comparison.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComparisonComponent {
  cities = [
    'Toronto',
    'Vancouver',
    'Montreal',
    'Calgary',
    'Ottawa',
    'Edmonton',
    'Winnipeg',
    'Quebec',
  ];

  cityData = {
    toronto: toronto,
    vancouver: vancouver,
    montreal: montreal,
    calgary: calgary,
    ottawa: ottawa,
    edmonton: edmonton,
    winnipeg: winnipeg,
    quebec: quebec,
  };
}
