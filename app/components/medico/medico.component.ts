import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicosService } from '../../services/medicos/medicos.service';
import { Medico } from '../../modelo/medico';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  public medicos: Medico[] = [];

  constructor(private router: Router, private ms: MedicosService) { }

  ngOnInit(): void {
    this.obtenerMedicos();
  }


  obtenerMedicos() {
    this.ms.getAllMedicos().subscribe(resp => {
      {
        this.medicos = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los médicos:', error);
      }
    });
  }

  agregarMedico() {
    this.router.navigate(['/agregarMedico']);
  }
}
