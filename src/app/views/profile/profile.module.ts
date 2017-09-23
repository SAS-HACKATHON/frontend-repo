import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PushNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    PushNotificationsModule,
    ProfileRoutingModule,
    ChartsModule
  ],
  declarations: [ ProfileComponent ]
})
export class ProfileModule { }
