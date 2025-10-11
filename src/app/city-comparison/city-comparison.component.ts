import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CityCardComponent } from './city-card/city-card.component';
import toronto from '../shared/models/cities/toronto.json';
import vancouver from '../shared/models/cities/vancouver.json';
import montreal from '../shared/models/cities/montreal.json';
import calgary from '../shared/models/cities/calgary.json';
import ottawa from '../shared/models/cities/ottawa.json';
import edmonton from '../shared/models/cities/edmonton.json';
import winnipeg from '../shared/models/cities/winnipeg.json';
import quebec from '../shared/models/cities/quebec.json';
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
