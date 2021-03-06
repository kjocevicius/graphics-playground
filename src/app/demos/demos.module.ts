import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsDemoComponent } from './planets-demo/planets-demo.component';
import { PlanetsModule } from '../planets/planets.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'planets', component: PlanetsDemoComponent,
  }
];

@NgModule({
  declarations: [PlanetsDemoComponent],
  imports: [
    CommonModule,
    PlanetsModule,

    RouterModule.forChild(routes)
  ]
})
export class DemosModule { }
