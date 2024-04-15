import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../../services/citas/citas.service';
import { Cita } from '../../modelo/cita';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.scss'
})
export class CitaComponent implements OnInit{

  constructor(private router: Router, private cs: CitasService,public fb: FormBuilder) {

  }
  citaForm: FormGroup;

  public citas: Cita[] = [];
  public show=false;

  ngOnInit(): void {

    this.obtenerCitas();
    this.citaForm = this.fb.group({
      id : [''],
      fechaHora: ['',Validators.required],
      motivoCita: ['',Validators.required],
      attribute11: ['',Validators.required],
      pacienteId: ['',Validators.required],
      medicoId: ['',Validators.required],
    })

  }

  obtenerCitas() {
    this.cs.getAllCitas().subscribe(resp => {
      {
        this.citas = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }

  eliminar( id:any){
    this.cs.deleteCita(id).subscribe(resp=>{
      
    },
  )
  }

  editar(cita:Cita){
    this.citaForm.setValue({
      id : cita.id,
      fechaHora: cita.fechaHora,
      motivoCita: cita.motivoCita,
      attribute11: cita.attribute11,
      pacienteId: cita.pacienteId,
      medicoId: cita.medicoId,
    })
    
  }

  guardar(): void {
    this.cs.saveCita(this.citaForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

}
