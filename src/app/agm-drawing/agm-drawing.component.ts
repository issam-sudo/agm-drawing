import { Component, OnInit } from '@angular/core';
import { agmDrawingManager } from '../model/AgmDrawingManager.model';
import { optionsMap } from '../model/OptionsMap.model';
import { CreateShapeService } from '../service/create-shape.service';
import { ResetShapeService } from '../service/reset-shape.service';
declare const google: any;

@Component({
  selector: 'app-agm-drawing',
  templateUrl: './agm-drawing.component.html',
  styleUrls: ['./agm-drawing.component.scss']
})
export class AgmDrawingComponent implements OnInit {
  managerOptions: agmDrawingManager;
  options: optionsMap;
  polygon: any;
  circle: any;
  polyline:any;
  rectangle:any;
  marker:any;
  
  
  ngOnInit(): void {
  }

  

  constructor(private CreateShape: CreateShapeService , private resetShapeService: ResetShapeService) {
    this.managerOptions ={
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['circle' ,'polyline' ,'polygon' , 'rectangle', 'marker']
      },
      polygonOptions: {
        draggable: true,
        editable: true
      },
      circleOptions: {
        draggable: true,
        editable: true
      },
      rectangleOptions: {
        draggable: true,
        editable: true
      },
      polylineOptions: {
        draggable: true,
        editable: true
      },
      markerOptions: {
        draggable: true,
        editable: true
      },
      drawingMode: "circle"
    };

    this.options = {
      lat: 33.5362475,
      lng: -111.9267386,
      zoom: 10,
      fillColor: "#DC143C",
      draggable: true,
      editable: true,
      visible: true
    };
  }



  resetShapeSpecific(typeShape:any){
  this.resetShapeService.resetShapeSpecific(typeShape)
  }


  resetMap(){
    this.resetShapeService.resetMap()
  }
  polygonCreated($event: any) {
 this.CreateShape.polygonCreated($event)
  }


  CircleCreated($event: any) {
    this.CreateShape.CircleCreated($event)
  }

  PolylineCreated($event: any) {
    this.CreateShape.PolylineCreated($event)
  }
  RectangleCreated($event: any) {
    this.CreateShape.RectangleCreated($event)
  }
  MarkerCreated($event: any) {
    this.CreateShape.MarkerCreated($event)
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
}

