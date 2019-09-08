import { Component, AfterViewInit } from '@angular/core';
import { Platform } from '@ionic/angular';
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
  constructor(public platform: Platform) {}

  ngAfterViewInit() {
    console.log(this.platform);
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    let map = GoogleMaps.create('map');

    map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
      let coordinates: LatLng = new LatLng(36.7783, 119.4179);

      let position = {
        target: coordinates,
        zoom: 14
      };

      map.animateCamera(position);

      let markerOptions: MarkerOptions = {
        position: coordinates,
        icon: 'assets/images/marker.png',
        title: 'Hello California'
      };

      const marker = map.addMarker(markerOptions).then((marker: Marker) => {
        marker.showInfoWindow();
      });
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
