import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthSharedComponent } from './auth-shared/auth-shared.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthSharedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    AppRoutingModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    AuthSharedComponent
  ]
})
export class AuthModule { }
