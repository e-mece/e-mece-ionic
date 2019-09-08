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

@Component({
  selector: 'app-nearby-events',
  templateUrl: 'nearby-events.page.html',
  styleUrls: ['nearby-events.page.scss']
})
export class NearbyEventsPage implements AfterViewInit {
  map: GoogleMap;
  constructor(public platform: Platform, private geolocation: Geolocation) {}

  ngAfterViewInit() {
    console.log(this.platform);
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    var locations: [string, number, number, number][] = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    let map = GoogleMaps.create('map');

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      var mylat: number;
      var mylong: number;
      this.geolocation
        .getCurrentPosition()
        .then(resp => {
          mylat = resp.coords.latitude;
          mylong = resp.coords.longitude;
        })
        .catch(error => {
          console.log('Error getting location', error);
        });

      let coordinates: LatLng = new LatLng(mylat, mylong);

      let position = {
        center: coordinates,
        zoom: 14
      };

      let mymarker: Marker = this.map.addMarkerSync({
        title: 'Ionic',
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: mylat,
          lng: mylong
        }
      });

      map.animateCamera(position);
      let markerOptions: MarkerOptions;
      let marker;
      for (let i = 0; i < locations.length; i++) {
        markerOptions = {
          position: new LatLng(locations[i][1], locations[i][2]),
          icon: 'blue',
          title: locations[i][0]
        };
        marker = map.addMarker(markerOptions).then((marker: Marker) => {
          marker.showInfoWindow();
        });
      }
    });
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
