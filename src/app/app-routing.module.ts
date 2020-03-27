import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuildingComponent} from "./building/building.component";


const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/building/1'},
  {path: 'building/:id', component: BuildingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
