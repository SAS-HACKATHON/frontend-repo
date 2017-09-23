import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SofeventsComponent } from './sofevents.component';
import { SofeventsRoutingModule } from './sofevents-routing.module';

@NgModule({
  imports: [
    SofeventsRoutingModule,
    ChartsModule
  ],
  declarations: [ SofeventsComponent ]
})
export class SofeventsModule { }
