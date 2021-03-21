import { AgmCoreModule } from '@agm/core';
import { AgmDrawingModule } from '@agm/drawing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmDrawingComponent } from './agm-drawing/agm-drawing.component';
import { NavComponent } from './core/nav/nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AgmDrawingComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkCkK4N39fnuq86Fk0risyGhA8rMRBkZU',
      libraries: ['drawing']
    }),
    AgmDrawingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
