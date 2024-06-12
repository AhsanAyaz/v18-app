import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [{
  path: '',
  redirectTo: '/users',
  pathMatch: 'full',
},
{
  path: 'users',
  component: UsersComponent,
},
{
  path: 'user/:uuid',
  component: UserComponent,
},];
