import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'error/:status', component: ErrorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'sign_in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
