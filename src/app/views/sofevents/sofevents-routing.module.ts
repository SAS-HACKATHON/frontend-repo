import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SofeventsComponent } from './sofevents.component';

const routes: Routes = [
  {
    path: '',
    component: SofeventsComponent,
    data: {
      title: 'Sof\'Events'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofeventsRoutingModule {}
