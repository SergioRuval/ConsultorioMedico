import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AltaService } from 'src/app/services/alta.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private _location: Location,private altaService: AltaService, private router: Router) { }

  ngOnInit(): void {
  }

  onAddPatient(form: any){
    this.altaService.darAlta(form.value).subscribe(res => {
      console.log(form.value);
      this.router.navigateByUrl('/home');
    });
  }

  regresar(){
    this._location.back();
  }

}
