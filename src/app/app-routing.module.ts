import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmDrawingComponent } from './agm-drawing/agm-drawing.component';
 
const routes: Routes = [
 { path : '' , component : AgmDrawingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
