import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes/pacientes.service';
import { Paciente } from '../../modelo/paciente';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent implements OnInit {

  public pacientes: Paciente[] = [];

  constructor(private router: Router, private ps: PacientesService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }


  obtenerPacientes() {
    this.ps.getAllPacientes().subscribe(resp => {
      {
        this.pacientes = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los médicos:', error);
      }
    });
  }

  agregarPaciente(){

    this.router.navigate(['/agregarPaciente'])
  }

  eliminar( id:any){
    this.ps.deletePaciente(id).subscribe(resp=>{
      
    },
  )
  }


}
