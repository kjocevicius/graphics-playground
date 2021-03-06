import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetViewerComponent } from './planet-viewer/planet-viewer.component';
import { OrbiterComponent } from './orbiter/orbiter.component';



@NgModule({
  declarations: [
    PlanetViewerComponent,
    OrbiterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanetViewerComponent,
  ]
})
export class PlanetsModule { }
