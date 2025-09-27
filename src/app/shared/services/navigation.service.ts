import { Injectable } from '@angular/core';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  getNavigationItems() {
    return [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Cities',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Comparison',
            routerLink: '/cities',
          },
          {
            separator: true,
          },
          {
            label: 'Toronto',
            routerLink: '/cities/toronto',
          },
          {
            label: 'Vancouver',
            routerLink: '/cities/vancouver',
          },
          {
            label: 'Ottawa',
            routerLink: '/cities/ottawa',
          },
          {
            label: 'Montreal',
            routerLink: '/cities/montreal',
          },
          {
            label: 'Calgary',
            routerLink: '/cities/calgary',
          },
          {
            label: 'Winnipeg',
            routerLink: '/cities/winnipeg',
          },
        ],
      },
    ];
  }
}
