import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent implements OnInit {

  constructor(private router: Router, private us: UsuariosService) {

  }

  public usuarios: Usuario[] = [];
  public show=false;

  ngOnInit(): void {

    this.obtenerUsuarios();

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

    
  }

  agregarUsuario() {

    this.router.navigate(['/agregarUsuario'])
  }

}
