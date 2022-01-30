import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
  {
    path: '',
    component: LoginComponent
    
  },

  {
    path: 'aula',    
    loadChildren: () => import('./aula-virtual/aula-virtual.module').then( m => m.AulaVirtualModule )    
  },
  {
    path: '**',
    redirectTo: ''    
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
