import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicosService } from '../../services/medicos/medicos.service';
import { Medico } from '../../modelo/medico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  public medicos: Medico[] = [];
  medicoForm: FormGroup;

  constructor(private router: Router, private ms: MedicosService,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.obtenerMedicos();
    this.medicoForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      numColegiado: ['', Validators.required]
    })
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

  guardar(): void {
    this.ms.saveMedico(this.medicoForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

  editar(medico:Medico){
    this.medicoForm.setValue({
      id : medico.id,
      nombre : medico.nombre,
      apellidos: medico.apellidos,
      clave: medico.clave,
      numColegiado: medico.numColegiado
    })
    
  }

  eliminar( id:any){
    this.ms.deleteMedico(id).subscribe(resp=>{
      
    },
  )
  }

}
