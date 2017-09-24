import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { SofnewsComponent } from './sofnews.component';
import { SofnewsAddComponent } from './add/sofnews.add.component';
import { SofnewsShowComponent } from './show/sofnews.show.component';

const routes: Routes = [
  {
    path: '',
    component: SofnewsComponent,
    data: {
      title: 'Sof\'News'
    }
  },
  {
    path : 'add',
    component: SofnewsAddComponent,
  },
  {
    path : 'show',
    component: SofnewsShowComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofnewsRoutingModule {}
