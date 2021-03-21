import { Injectable } from '@angular/core';
import { CreateShapeService } from './create-shape.service';

@Injectable({
  providedIn: 'root'
})
export class ResetShapeService {

  constructor(private createShapeService :CreateShapeService ) { }

  resetMap(){
    if (this.createShapeService.polygon) {
      this.createShapeService.polygon.setMap(null);
    }
    if (this.createShapeService.circle) {
      this.createShapeService.circle.setMap(null);
    }
    if (this.createShapeService.polyline) {
      this.createShapeService.polyline.setMap(null);
    }
    if (this.createShapeService.rectangle) {
      this.createShapeService.rectangle.setMap(null);
    }
    if (this.createShapeService.marker) {
      this.createShapeService.marker.setMap(null);
    }
  }

  resetShapeSpecific(typeShape:any){
    if ( typeShape == 'polygon') {
      this.createShapeService.polygon.setMap(null);
    }
    if (typeShape == 'circle') {
      this.createShapeService.circle.setMap(null);
    }
    if (typeShape == 'polyline') {
      this.createShapeService.polyline.setMap(null);
    }
    if (typeShape == 'rectangle') {
      this.createShapeService.rectangle.setMap(null);
    }
    if (typeShape == 'marker') {
      this.createShapeService.marker.setMap(null);
    }
  }
}
