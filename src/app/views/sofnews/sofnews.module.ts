import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SofnewsComponent } from './sofnews.component';
import { CommonModule } from '@angular/common';
import { SofnewsRoutingModule } from './sofnews-routing.module';

@NgModule({
  imports: [
    SofnewsRoutingModule,
    ChartsModule,
    CommonModule  
  ],
  declarations: [ SofnewsComponent ]
})
export class SofnewsModule { }
