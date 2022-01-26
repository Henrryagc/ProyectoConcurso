import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  /*{

    


  },
  {
    path:'subjects',
    loadChildren: () => import('./navigation/pages/subjects/subjects.module').then(m => m.SubjectsModule)
  }*/

    {
      path: '',
      component: NavigationComponent,
      children: [
      { 
        path: 'home',    
        loadChildren: () => import('./navigation/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'subjects',
        loadChildren: () => import('./navigation/pages/subjects/subjects.module').then(m => m.SubjectsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaVirtualRoutingModule { }
