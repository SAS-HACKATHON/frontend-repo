import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SofhelloComponent } from './sofhello.component';
import { SofhelloRoutingModule } from './sofhello-routing.module';

@NgModule({
  imports: [
    SofhelloRoutingModule,
    ChartsModule
  ],
  declarations: [ SofhelloComponent ]
})
export class SofhelloModule { }
