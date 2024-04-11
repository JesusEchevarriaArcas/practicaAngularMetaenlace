import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.scss'
})
export class AgregarUsuarioComponent implements OnInit {


  usuarioForm: FormGroup;

  constructor(public fb: FormBuilder, public us: UsuariosService,private router: Router) {

  }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required]
    })
  }

  guardar(): void {
    this.us.saveUsuario(this.usuarioForm.value).subscribe(resp=>{

    }
    ,(error: any) => {
      console.error('Error al obtener los médicos:', error);
    }
  )
  }

  usuario:Usuario;


}
