import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import toronto from '../shared/cities/toronto.json';
import vancouver from '../shared/cities/vancouver.json';
import montreal from '../shared/cities/montreal.json';
import calgary from '../shared/cities/calgary.json';
import ottawa from '../shared/cities/ottawa.json';
import edmonton from '../shared/cities/edmonton.json';
import winnipeg from '../shared/cities/winnipeg.json';
import quebec from '../shared/cities/quebec.json';
import { filter, Subject, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {
  cityName = '';
  city: any = '';
  toronto = toronto;
  vancouver = vancouver;
  montreal = montreal;
  calgary = calgary;
  ottawa = ottawa;
  edmonton = edmonton;
  winnipeg = winnipeg;
  quebec = quebec;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.cityName = params.get('id') || '';
      switch (this.cityName) {
        case 'toronto':
          this.city = this.toronto;
          break;
        case 'vancouver':
          this.city = this.vancouver;
          break;
        case 'montreal':
          this.city = this.montreal;
          break;
        case 'calgary':
          this.city = this.calgary;
          break;
        case 'ottawa':
          this.city = this.ottawa;
          break;
        case 'edmonton':
          this.city = this.edmonton;
          break;
        case 'winnipeg':
          this.city = this.winnipeg;
          break;
        case 'quebec-city':
          this.city = this.quebec;
          break;
      }
      this.changeDetectorRef.detectChanges();
    });
  }
}
