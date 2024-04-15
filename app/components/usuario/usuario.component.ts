import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Usuario } from '../../modelo/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private us: UsuariosService,public fb: FormBuilder) {

  }
  usuarioForm: FormGroup;

  public usuarios: Usuario[] = [];
  public show=false;

  ngOnInit(): void {

    this.obtenerUsuarios();
    this.usuarioForm = this.fb.group({
      id : [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      clave: ['', Validators.required]
    })

  }

  obtenerUsuarios() {
    this.us.getAllUsuarios().subscribe(resp => {
      {
        this.usuarios = resp;
        console.log(resp);
      }
      (error: any) => {
        console.error('Error al obtener los usuarios:', error);
      }
    });
  }

  eliminar( id:any){
    this.us.deleteUsuario(id).subscribe(resp=>{
      
    },
  )
  }

  editar(usuario:Usuario){
    this.usuarioForm.setValue({
      id : usuario.id,
      nombre : usuario.nombre,
      apellidos: usuario.apellidos,
      clave: usuario.clave
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

}
