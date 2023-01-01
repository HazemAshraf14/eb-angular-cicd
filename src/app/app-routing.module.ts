import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { GraphComponent } from './component/ph-graph/ph-graph.component';

const routes: Routes = [
  {  path: "**" ,redirectTo: 'main-component' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
