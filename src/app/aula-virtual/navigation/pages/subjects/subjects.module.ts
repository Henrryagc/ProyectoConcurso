import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsComponent } from './subjects.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SubjectsComponent],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    MatCardModule
  ]
})
export class SubjectsModule { }
