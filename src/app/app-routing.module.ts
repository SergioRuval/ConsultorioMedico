import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { LoginComponent } from './components/login/login.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainDoctorComponent } from './components/main-doctor/main-doctor.component';
import { LoginEnfermeraComponent } from './components/login-enfermera/login-enfermera.component'; 
import { MainEnfermeraComponent } from './components/main-enfermera/main-enfermera.component';
import { VitalSignsComponent } from './components/vital-signs/vital-signs.component';
import { GetExpedientesComponent } from './components/get-expedientes/get-expedientes.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: "addpatient", component: AddPatientComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "doctor", component: MainDoctorComponent },
  { path: "logEnfermera", component: LoginEnfermeraComponent },
  { path: "enfermera", component: MainEnfermeraComponent },
  { path: "signos", component: VitalSignsComponent },
  { path: "expedientes", component: GetExpedientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
