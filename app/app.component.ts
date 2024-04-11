import { Component, OnInit } from '@angular/core';
//import { FormBuilder,FormGroup, Validators } from '@angular/forms';
//import { MedicosService } from './services/medicos/medicos.service';
//import { PacientesService } from './services/pacientes/pacientes.service';
//import { UsuariosService } from './services/usuarios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'PracticasMetaenlaceAngular';

  //constructor(public fb:FormBuilder, public ms:MedicosService, public ps:PacientesService){}

  ngOnInit(): void {
   
  }

}