import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {map} from 'rxjs/operators';
import {Moneda} from "../model/moneda";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MonedaDto} from "../dto/moneda-dto";

@Injectable()
export class MonedaService {

  constructor(private http: HttpClient) {}

  public list(): Observable<Moneda[]> {
    return this.http.get('http://localhost:8090/api/v1/moneda').pipe(map((res: any) => res));
  }

  public create(dto: MonedaDto): Observable<Moneda> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post('http://localhost:8090/api/v1/moneda',
      JSON.stringify(dto), httpOptions)
      .pipe(map((res: any) => res));
  }
}
