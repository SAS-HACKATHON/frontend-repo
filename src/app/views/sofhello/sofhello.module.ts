import { SofhelloShowComponent } from './show/sofhello.show.component';
import { SofhelloAddComponent } from './add/sofhello.add.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SofhelloComponent } from './sofhello.component';
import { SofhelloRoutingModule } from './sofhello-routing.module';

@NgModule({
  imports: [
    SofhelloRoutingModule,
    ChartsModule
  ],
  declarations: [ SofhelloComponent,SofhelloAddComponent, SofhelloShowComponent ]
})
export class SofhelloModule { }
