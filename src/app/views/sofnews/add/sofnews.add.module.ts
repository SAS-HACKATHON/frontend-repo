import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SofnewsAddComponent } from './sofnews.add.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule
  ],
  declarations: [ SofnewsAddComponent ]
})
export class SofnewsModule { }
