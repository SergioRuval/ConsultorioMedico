import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators/';
import { Observable, BehaviorSubject } from 'rxjs';

// Importamos las interfaces
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject = new BehaviorSubject(false);
  
  private token: string | null;

  constructor(private httpClient: HttpClient) { 
    this.token = "";
  }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/api/usuarios/registro`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if(res){
            // Guardar token
            this.saveToken(res.accessToken, res.expiresIn);
          }
        }
      ));
  }

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/api/usuarios/login`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if(res){
            // Guardar token
            this.saveToken(res.accessToken, res.expiresIn);
          }
        }
      ));
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');

  }

  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string | null{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }

    return this.token;
  }

}
