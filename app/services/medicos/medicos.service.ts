import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../../modelo/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiServer="http://localhost:8080/medicos";

  constructor(private httpClient: HttpClient) {
  }


  public getAllMedicos(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveMedico(medico:Medico): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,medico);
  }

}