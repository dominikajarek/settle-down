import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GalleriaModule } from 'primeng/galleria';

import toronto from '../shared/models/cities/toronto.json';
import vancouver from '../shared/models/cities/vancouver.json';
import montreal from '../shared/models/cities/montreal.json';
import calgary from '../shared/models/cities/calgary.json';
import ottawa from '../shared/models/cities/ottawa.json';
import edmonton from '../shared/models/cities/edmonton.json';
import winnipeg from '../shared/models/cities/winnipeg.json';
import quebec from '../shared/models/cities/quebec.json';
import { CommonModule } from '@angular/common';
import { CityNamePipe } from '../city-comparison/city-card/city-name.pipe';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-city',
  imports: [CommonModule, GalleriaModule, FieldsetModule, CityNamePipe],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {
  protected cityName = '';
  protected city: any = '';
  protected images: WritableSignal<any> = signal([]);

  protected toronto = toronto;
  protected vancouver = vancouver;
  protected montreal = montreal;
  protected calgary = calgary;
  protected ottawa = ottawa;
  protected edmonton = edmonton;
  protected winnipeg = winnipeg;
  protected quebec = quebec;

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

      this.images.set(this.city.images);
      console.log(this.images());
      this.changeDetectorRef.detectChanges();
    });
  }

  onImagesChange(event: any) {
    const newImages = Array.isArray(event) ? event : event?.value ?? [];
    this.images.set(newImages);
  }
}
