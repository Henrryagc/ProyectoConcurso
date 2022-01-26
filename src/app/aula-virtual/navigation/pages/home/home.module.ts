import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { JobStatusDashboardComponent } from './components/job-status-dashboard/job-status-dashboard.component';
import { MatIconModule } from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HomeComponent, CalendarComponent, JobStatusDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,    
    MatIconModule,    
    MatButtonModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
  ]
})
export class HomeModule { }
