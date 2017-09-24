import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { SoftechComponent } from './softech.component';
import { SoftechRoutingModule } from './softech-routing.module';

@NgModule({
  imports: [
    SoftechRoutingModule,
    ChartsModule,
    CommonModule  
  ],
  declarations: [ SoftechComponent ]
})
export class SoftechModule { }
