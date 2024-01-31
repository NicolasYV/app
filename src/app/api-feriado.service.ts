import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFeriadoService {

  urlApi = 'https://api.victorsanmartin.com/feriados/';

  constructor(private http:HttpClient) { }

  getFeriado():Observable<any>{
    return this.http.get(this.urlApi).pipe(
      retry(3)
    );
  }
}
