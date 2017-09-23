import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { UserprofileComponent } from './userprofile.component';
import { UserprofileRoutingModule } from './userprofile-routing.module';

@NgModule({
  imports: [
    UserprofileRoutingModule,
    ChartsModule
  ],
  declarations: [ UserprofileComponent ]
})
export class UserprofileModule { }
