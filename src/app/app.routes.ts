import { Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thought/create-thought/create-thought.component';
import { ListThoughtsComponent } from './components/thought/list-thoughts/list-thoughts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'full',
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent,
  },
  {
    path: 'listThoughts',
    component: ListThoughtsComponent,
  },
];
