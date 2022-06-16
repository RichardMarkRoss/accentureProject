import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { SecondComponent } from './second/second.component';
const routes: Routes = [
  {path: 'second', component: StartComponent},
  {path: '', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponent =  [StartComponent, SecondComponent];
