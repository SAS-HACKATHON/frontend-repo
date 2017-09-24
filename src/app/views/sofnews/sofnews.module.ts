import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SofnewsComponent } from './sofnews.component';
import { SofnewsAddComponent } from './add/sofnews.add.component';
import { SofnewsShowComponent } from './show/sofnews.show.component';
import { CommonModule } from '@angular/common';
import { SofnewsRoutingModule } from './sofnews-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SofnewsRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ SofnewsComponent, SofnewsAddComponent, SofnewsShowComponent ]
})
export class SofnewsModule { }
