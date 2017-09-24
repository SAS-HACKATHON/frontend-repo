import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PushNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    PushNotificationsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
