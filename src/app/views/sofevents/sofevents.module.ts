import { SofeventsShowComponent } from './show/sofevents.show.component';
import { SofeventsAddComponent } from './add/sofevents.add.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { SofeventsComponent } from './sofevents.component';
import { SofeventsRoutingModule } from './sofevents-routing.module';

@NgModule({
  imports: [
    SofeventsRoutingModule,
    // BrowserAnimationsModule,
    ChartsModule,
    CommonModule  
  ],
  declarations: [ 
    SofeventsComponent,
    SofeventsAddComponent,
    SofeventsShowComponent,
     ]
})
export class SofeventsModule { }
