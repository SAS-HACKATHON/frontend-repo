import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SofhelloComponent } from './sofhello.component';

const routes: Routes = [
  {
    path: '',
    component: SofhelloComponent,
    data: {
      title: 'Sof\'Hello'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofhelloRoutingModule {}
