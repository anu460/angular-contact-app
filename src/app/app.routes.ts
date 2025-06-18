import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
   
  { path: 'user-list', component: UserListComponent },  // Default route
  { path: 'user-form', component: UserFormComponent }  // Admin route
];

