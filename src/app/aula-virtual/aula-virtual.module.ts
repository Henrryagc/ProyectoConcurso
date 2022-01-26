import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaVirtualRoutingModule } from './aula-virtual-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { HomeModule } from './navigation/pages/home/home.module';
import { SubjectsModule } from './navigation/pages/subjects/subjects.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [          
    NavigationComponent
  ],
  imports: [    
    CommonModule,
    AulaVirtualRoutingModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    FormsModule,
    MatDividerModule,    
    HomeModule,
    SubjectsModule
  ],  
})
export class AulaVirtualModule { }
