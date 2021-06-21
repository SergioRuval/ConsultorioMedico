import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { MainDoctorComponent } from './components/main-doctor/main-doctor.component';
import { LoginEnfermeraComponent } from './components/login-enfermera/login-enfermera.component';
import { MainEnfermeraComponent } from './components/main-enfermera/main-enfermera.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
    AddPatientComponent,
    LoginComponent,
    SignupComponent,
    VitalSignsComponent,
    MainDoctorComponent,
    LoginEnfermeraComponent,
    MainEnfermeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
