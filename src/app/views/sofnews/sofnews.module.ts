import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SofnewsComponent } from './sofnews.component';
import { SofnewsRoutingModule } from './sofnews-routing.module';

@NgModule({
  imports: [
    SofnewsRoutingModule,
    ChartsModule
  ],
  declarations: [ SofnewsComponent ]
})
export class SofnewsModule { }
