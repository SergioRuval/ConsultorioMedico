import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void{    
    form.value.role = "DOCTOR_ROLE";
    this.authService.login(form.value).subscribe(res => {
      console.log(form.value);
      this.router.navigateByUrl('/doctor');
    })
  }

}
