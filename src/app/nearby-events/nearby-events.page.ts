import { Component, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  LatLng,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { EventService } from '../services/event.service';
import { Event } from 'src/contract';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nearby-events',
  templateUrl: 'nearby-events.page.html',
  styleUrls: ['nearby-events.page.scss']
})
export class NearbyEventsPage implements AfterViewInit {
  map: GoogleMap;
  events: Event[];
  constructor(
    public platform: Platform,
    private geolocation: Geolocation,
    private eventService: EventService
  ) {}

  ngAfterViewInit() {
    console.log(this.platform);
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    this.map = GoogleMaps.create('map');

    this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let mylat: number;
      let mylong: number;
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          mylat = resp.coords.latitude;
          mylong = resp.coords.longitude;
          this.eventService.getClosestEvents(mylat, mylong).then(response => {
            this.events = response.events;
            this.events.forEach(event => this.addMarkerForEvent(event));
          });
        })
        .catch(error => {
          console.log('Error getting location', error);
        });

      const coordinates: LatLng = new LatLng(mylat, mylong);

      const position = {
        center: coordinates,
        zoom: 14
      };

      const mymarker: Marker = this.map.addMarkerSync({
        title: 'Konumum',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: mylat,
          lng: mylong
        }
      });
    });
  }

  addMarkerForEvent(event: Event): void {
    const markerOptions = {
      position: new LatLng(event.latitude, event.longitude),
      icon: 'blue',
      title: event.title
    };
    this.map.addMarker(markerOptions).then(marker => marker.showInfoWindow());
  }

  // loadMap() {
  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     API_KEY_FOR_BROWSER_RELEASE: 'e-mece-1567918776954',
  //     API_KEY_FOR_BROWSER_DEBUG: 'e-mece-1567918776954'
  //   });

  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //       target: {
  //         lat: 43.0741904,
  //         lng: -89.3809802
  //       },
  //       zoom: 18,
  //       tilt: 30
  //     }
  //   };

  //   this.map = GoogleMaps.create('map_canvas', mapOptions);

  //   let marker: Marker = this.map.addMarkerSync({
  //     title: 'Ionic',
  //     icon: 'blue',
  //     animation: 'DROP',
  //     position: {
  //       lat: 43.0741904,
  //       lng: -89.3809802
  //     }
  //   });
  //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //     alert('clicked');
  //   });
  // }
}
