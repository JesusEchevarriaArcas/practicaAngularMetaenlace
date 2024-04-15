import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from '../../services/pacientes/pacientes.service';
import { Paciente } from '../../modelo/paciente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.scss'
})
export class PacienteComponent implements OnInit {

  public pacientes: Paciente[] = [];
  pacienteForm: FormGroup;

  constructor(private router: Router, private ps: PacientesService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerPacientes();

    this.pacienteForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      nss: ['', Validators.required],
      numTarjeta: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })
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

  guardar(): void {
    this.ps.savePaciente(this.pacienteForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

  editar(paciente:Paciente){
    this.pacienteForm.setValue({
      id : paciente.id,
      nombre : paciente.nombre,
      apellidos: paciente.apellidos,
      clave: paciente.clave,
      nss: paciente.nss,
      numTarjeta: paciente.numTarjeta,
      telefono: paciente.telefono,
      direccion: paciente.direccion
    })
    
  }


}
