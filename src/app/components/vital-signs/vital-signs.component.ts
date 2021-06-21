import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AltaService } from 'src/app/services/alta.service';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css']
})
export class VitalSignsComponent implements OnInit {

  constructor(private altaService: AltaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSend(form: any){
    this.altaService.registroSignos(form.value).subscribe(res => {
      this.router.navigateByUrl('/enfermera');
    });
  }

}
