import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { SofeventsComponent } from './sofevents.component';
import { SofeventsRoutingModule } from './sofevents-routing.module';

@NgModule({
  imports: [
    SofeventsRoutingModule,
    ChartsModule,
    CommonModule  
  ],
  declarations: [ SofeventsComponent ]
})
export class SofeventsModule { }
