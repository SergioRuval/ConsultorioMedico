import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-enfermera',
  templateUrl: './login-enfermera.component.html',
  styleUrls: ['./login-enfermera.component.css']
})
export class LoginEnfermeraComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void{
    form.value.role = "ENF_ROLE";
    this.authService.login(form.value).subscribe(res => {
      console.log(form.value);
      this.router.navigateByUrl('/enfermera');
    })
  }

}
