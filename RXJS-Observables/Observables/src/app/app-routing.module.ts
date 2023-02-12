import { FormControlsEFormGroupsComponent } from './componentes/aulas/form-controls-e-form-groups/form-controls-e-form-groups.component';
import { ObservablesComponent } from './componentes/aulas/observables/observables.component';
import { PromisesComponent } from './componentes/aulas/promises/promises.component';
import { HomeComponent } from './componentes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aulas/promises',
    component: PromisesComponent
  },
  {
    path: 'aulas/observables',
    component: ObservablesComponent
  },
  {
    path: 'aulas/form-controls-e-form-groups',
    component: FormControlsEFormGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
