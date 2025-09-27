import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appCityName',
})
export class CityNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value.includes(' ')) {
      return value.split(' ')[0];
    }
    return value;
  }
}
