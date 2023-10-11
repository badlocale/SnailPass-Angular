import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthSharedComponent } from 'src/auth/auth-shared/auth-shared.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { RegistrationComponent } from 'src/auth/registration/registration.component';

const authRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
]

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthSharedComponent, children: authRoutes }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
