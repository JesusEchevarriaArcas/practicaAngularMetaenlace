import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../../services/medicos/medicos.service';

@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrl: './agregar-medico.component.scss'
})
export class AgregarMedicoComponent implements OnInit {

  medicoForm: FormGroup;

  constructor(public fb: FormBuilder, public ms: MedicosService) {

  }

  ngOnInit(): void {
    this.medicoForm = this.fb.group({
      //id : ['',Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required],
      numColegiado: ['', Validators.required]
    })
  }

  guardar(): void {
    this.ms.saveMedico(this.medicoForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }
}
