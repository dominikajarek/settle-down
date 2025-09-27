import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComparisonComponent } from './city-comparison/city-comparison.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cities',
    component: CityComparisonComponent,
  },
];
