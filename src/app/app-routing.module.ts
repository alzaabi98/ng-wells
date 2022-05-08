import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './layouts/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './pages/about.component';
import { TreeComponent } from './tree/tree.component';
import { WellComponent } from './well/well.component';
import { WellsComponent } from './wells/wells.component';

const routes: Routes = [
   {
    path: '',
    component: MainComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'tree',
    component: TreeComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
    {
    path: 'wells',
    component: WellsComponent
  },
  {
    path: 'wells/:id',
    component: WellComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
