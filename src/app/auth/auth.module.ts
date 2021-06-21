import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../services/auth.service';

// Nuestros componentes
import { AddPatientComponent } from '../components/add-patient/add-patient.component';
import { LoginComponent } from '../components/login/login.component';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { SignupComponent } from '../components/signup/signup.component';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    AddPatientComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
