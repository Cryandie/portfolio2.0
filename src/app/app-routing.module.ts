import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ForssaDetailsComponent } from './components/projects-details/forssa-details/forssa-details.component';
import { MovieAppDetailsComponent } from './components/projects-details/movie-app-details/movie-app-details.component';
import { ProjectsComponent } from './components/projects-details/projects/projects.component';
import { SbsDetailsComponent } from './components/projects-details/sbs-details/sbs-details.component';
import { TodoDetailsComponent } from './components/projects-details/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: NavComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/backoffice-details',
    component: MovieAppDetailsComponent,
  },
  {
    path: 'projects/todo-details',
    component: TodoDetailsComponent,
  },
  {
    path: 'projects/forssa-details',
    component: ForssaDetailsComponent,
  },
  {
    path: 'projects/sbs-details',
    component: SbsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
