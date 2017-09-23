import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SofnewsComponent } from './sofnews.component';

const routes: Routes = [
  {
    path: '',
    component: SofnewsComponent,
    data: {
      title: 'Sof\'News'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofnewsRoutingModule {}
