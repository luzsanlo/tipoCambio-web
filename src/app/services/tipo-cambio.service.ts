import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {TipoCambio} from "../model/tipo-cambio";
import {TipoCambioDto} from "../dto/tipo-cambio-dto";
import {RequestDto} from "../dto/request-dto";
import {Response} from "../model/response";

@Injectable()
export class TipoCambioService {

  constructor(private http: HttpClient) {}

  public list(): Observable<TipoCambio[]> {
    return this.http.get('http://localhost:8090/api/v1/tipo_cambio').pipe(map((res: any) => res));
  }

  public create(dto: TipoCambioDto): Observable<TipoCambio> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post('http://localhost:8090/api/v1/tipo_cambio',
      JSON.stringify(dto), httpOptions)
      .pipe(map((res: any) => res));
  }

  public calculate(dto: RequestDto): Observable<Response> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post('http://localhost:8090/api/v1/tipo_cambio/operacion',
      JSON.stringify(dto), httpOptions)
      .pipe(map((res: any) => res));
  }
}
