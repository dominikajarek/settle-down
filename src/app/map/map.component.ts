import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent {
  private map!: L.Map;

  ngAfterViewInit() {
    this.initMap();

    var tooltip = L.tooltip(L.latLng([50.2134, -96.9638]), {
      sticky: true,
      permanent: true,
    }).setContent('Winnipeg');
    tooltip.addTo(this.map);
  }

  private initMap() {
    this.map = L.map('map').setView([50.2134, -95.0933], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }
}
