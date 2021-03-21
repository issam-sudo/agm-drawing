import { Injectable } from '@angular/core';
declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class CreateShapeService {
  polygon: any;
  circle: any;
  polyline:any;
  rectangle:any;
  marker:any;
  
  constructor() { }

  polygonCreated($event: any) {
    if (this.polygon) {
      this.polygon.setMap(null);
    }
    this.polygon = $event;
    this.addPolygonChangeEvent(this.polygon);
    
    google.maps.event.addListener(this.polygon, "coordinates_changed", function(
      index: any,
      obj: any
    ) {
      // Polygon object: yourPolygon
      console.log("coordinates_changed");
    });
  }


  CircleCreated($event: any) {
    if (this.circle) {
      this.circle.setMap(null);
    }
    this.circle = $event;
    this.addPolygonChangeEvent(this.circle);
    
    google.maps.event.addListener(this.circle, "coordinates_changed", function(
      index: any,
      obj: any
    ) {
      // Polygon object: yourPolygon
      console.log("coordinates_changed");
    });
  }

  PolylineCreated($event: any) {
    if (this.polyline) {
      this.polyline.setMap(null);
    }
    this.polyline = $event;
    this.addPolygonChangeEvent(this.polyline);
    
    google.maps.event.addListener(this.polyline, "coordinates_changed", function(
      index: any,
      obj: any
    ) {
      // Polygon object: yourPolygon
      console.log("coordinates_changed");
    });
  }
  RectangleCreated($event: any) {
    if (this.rectangle) {
      this.rectangle.setMap(null);
    }
    this.rectangle = $event;
    this.addPolygonChangeEvent(this.rectangle);
    
    google.maps.event.addListener(this.rectangle, "coordinates_changed", function(
      index: any,
      obj: any
    ) {
      // Polygon object: yourPolygon
      console.log("coordinates_changed");
    });
  }
  MarkerCreated($event: any) {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = $event;
    this.addPolygonChangeEvent(this.marker);
    
    google.maps.event.addListener(this.marker, "coordinates_changed", function(
      index: any,
      obj: any
    ) {
      // Polygon object: yourPolygon
      console.log("coordinates_changed");
    });
  }
  addPolygonChangeEvent(polygon: any) {
    var me = polygon,
      isBeingDragged = false,
      triggerCoordinatesChanged = function() {
        // Broadcast normalized event
        google.maps.event.trigger(me, "coordinates_changed");
      };

    // If  the overlay is being dragged, set_at gets called repeatedly,
    // so either we can debounce that or igore while dragging,
    // ignoring is more efficient
    google.maps.event.addListener(me, "dragstart", function() {
      isBeingDragged = true;
    });

    // If the overlay is dragged
    google.maps.event.addListener(me, "dragend", function() {
      triggerCoordinatesChanged();
      isBeingDragged = false;
    });

    // Or vertices are added to any of the possible paths, or deleted
    var paths = me?.getPaths();
    paths.forEach(function(path: any, i: any) {
      google.maps.event.addListener(path, "insert_at", function() {
        triggerCoordinatesChanged();
      });
      google.maps.event.addListener(path, "set_at", function() {
        if (!isBeingDragged) {
          triggerCoordinatesChanged();
        }
      });
      google.maps.event.addListener(path, "remove_at", function() {
        triggerCoordinatesChanged();
      });
    });
  }


  getPaths() {
    console.log("get path");
    if (this.polygon) {
      const vertices = this.polygon?.getPaths().getArray()[0];
      let paths: string[] = [];
      vertices?.getArray().forEach(function(xy: { lat: () => any; lng: () => any; }, i: any) {
        // console.log(xy);
        let latLng = {
          lat: xy.lat(),
          lng: xy.lng()
        };
        paths.push(JSON.stringify(latLng));
      });
      return paths;
    }
    return [];
  }


}
