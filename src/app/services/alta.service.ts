import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators/';
import { Observable, BehaviorSubject } from 'rxjs';

import { ExpClin } from '../models/exp-clin';
import { SignosVitales } from '../models/signos-vitales';

@Injectable({
  providedIn: 'root'
})
export class AltaService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
  }

  darAlta(expClin: ExpClin){
    return this.httpClient.post<ExpClin>(`${this.AUTH_SERVER}/api/expediente-clinico`, expClin).pipe(tap(
      (res: ExpClin) => {
        if(res){
          // Guardar token
          console.log(res);
          
        }
      }
    ))
  }

  registroSignos(signosVitales: SignosVitales){
    return this.httpClient.post<SignosVitales>(`${this.AUTH_SERVER}/api/formulario`, signosVitales).pipe(tap(
      (res: SignosVitales) => {
        if(res){
          // Guardar token
          console.log(res);
          
        }
      }
    ))
  }

  getExpediente(){
    return this.httpClient.get(`${this.AUTH_SERVER}/api/expediente-clinico`);
  }
  
}
