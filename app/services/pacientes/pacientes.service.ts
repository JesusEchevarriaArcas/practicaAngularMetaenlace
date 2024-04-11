import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../modelo/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private apiServer="http://localhost:8080/pacientes";

  constructor(private httpClient: HttpClient) {
  }


  public getAllPacientes(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public savePaciente(paciente:Paciente): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,paciente);
  }

  deletePaciente(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }
}
