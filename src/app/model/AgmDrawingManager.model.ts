export interface agmDrawingManager {

    drawingControl: boolean;
    drawingControlOptions: { drawingModes: any[]; };
    polygonOptions: { draggable: boolean; editable: boolean; };
    circleOptions: { draggable: boolean; editable: boolean; };
    rectangleOptions: { draggable: boolean; editable: boolean; };
    polylineOptions: { draggable: boolean; editable: boolean; };
    markerOptions: { draggable: boolean; editable: boolean; };
    drawingMode: any;
}


