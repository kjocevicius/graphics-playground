import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsDemoComponent } from './planets-demo/planets-demo.component';
import { PlanetsModule } from '../planets/planets.module';
import { RouterModule, Routes } from '@angular/router';
import { EmptyDemoComponent } from './empty-demo/empty-demo.component';

const routes: Routes = [
  {
    path: 'planets', component: PlanetsDemoComponent,
  },
  {
    path: 'empty', component: EmptyDemoComponent,
  },
];

@NgModule({
  declarations: [PlanetsDemoComponent, EmptyDemoComponent],
  imports: [
    CommonModule,
    PlanetsModule,

    RouterModule.forChild(routes)
  ]
})
export class DemosModule { }
