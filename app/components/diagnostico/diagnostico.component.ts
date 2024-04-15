import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DiagnosticosService } from '../../services/diagnosticos/diagnosticos.service';
import { Diagnostico } from '../../modelo/diagnostico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrl: './diagnostico.component.scss'
})
export class DiagnosticoComponent implements OnInit{


  constructor(private router: Router, private ds: DiagnosticosService,public fb: FormBuilder) {

  }
  diagnosticoForm: FormGroup;

  public diagnosticos: Diagnostico[] = [];
  public show=false;

  ngOnInit(): void {

    this.obtenerDiagnosticos();
    this.diagnosticoForm = this.fb.group({
      id : [''],
      valoracionEspecialista: ['',Validators.required],
      enfermedad: ['',Validators.required],
      citaId: ['',Validators.required]
    })

  }

  obtenerDiagnosticos() {
    this.ds.getAllDiagnosticos().subscribe(resp => {
      {
        this.diagnosticos = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }

  eliminar( id:any){
    this.ds.deleteDiagnostico(id).subscribe(resp=>{
      
    },
  )
  }

  editar(diagnostico:Diagnostico){
    this.diagnosticoForm.setValue({
      id : diagnostico.id,
      valoracionEspecialista: diagnostico.valoracionEspecialista,
      enfermedad: diagnostico.enfermedad,
      citaId: diagnostico.citaId,
    })
    
  }

  guardar(): void {
    this.ds.saveDiagnostico(this.diagnosticoForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }


}
