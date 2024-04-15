import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostico } from '../../modelo/diagnostico';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticosService {

  private apiServer="http://localhost:8080/diagnosticos";

  constructor(private httpClient: HttpClient) {
  }


  public getAllDiagnosticos(): Observable<any> {

    return this.httpClient.get<any>(this.apiServer);
  }

  public saveDiagnostico(diagnostico:Diagnostico): Observable<any> {

    return this.httpClient.post<any>(this.apiServer,diagnostico);
  }

  deleteDiagnostico(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.apiServer + "/" + id);

  }
}
