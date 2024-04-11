import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiServer="http://localhost:8080/usuarios";

  constructor(private httpClient: HttpClient) { }


  public getAllUsuarios(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveUsuario(usuario:Usuario): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,usuario);
  }

  deleteUsuario(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }

}
