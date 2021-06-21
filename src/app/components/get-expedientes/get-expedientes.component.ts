import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AltaService } from 'src/app/services/alta.service';
import { ExpClin } from 'src/app/models/exp-clin';

@Component({
  selector: 'app-get-expedientes',
  templateUrl: './get-expedientes.component.html',
  styleUrls: ['./get-expedientes.component.css']
})
export class GetExpedientesComponent implements OnInit {

  constructor(private altaService: AltaService, private router: Router) { }

  expedientes: any;
  arrayExpedientes: any[] = [];

  ngOnInit(): void {
    this.altaService.getExpediente().subscribe(data => {
      console.log(data);
      this.expedientes = data;
      console.log(this.expedientes.expClin);
      this.arrayExpedientes = this.expedientes.expClin;
      
    }, error => {
      console.log(error);
      
    })
  }



}
