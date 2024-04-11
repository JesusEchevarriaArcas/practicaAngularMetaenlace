import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../../services/pacientes/pacientes.service';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.component.html',
  styleUrl: './agregar-paciente.component.scss'
})
export class AgregarPacienteComponent implements OnInit {

  pacienteForm: FormGroup;

  constructor(public fb: FormBuilder, public ps: PacientesService) {

  }

  ngOnInit(): void {
    this.pacienteForm = this.fb.group({
      //id : ['',Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      nss: ['', Validators.required],
      numTarjeta: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }

  guardar(): void {
    this.ps.savePaciente(this.pacienteForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

}
