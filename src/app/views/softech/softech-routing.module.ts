import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SoftechComponent } from './softech.component';

const routes: Routes = [
  {
    path: '',
    component: SoftechComponent,
    data: {
      title: 'Sof\'News'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftechRoutingModule {}
