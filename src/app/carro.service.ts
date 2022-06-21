import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private carrosUrl = 'http://localhost:3000/carros';
  constructor(private http: HttpClient) { }

  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.carrosUrl)
  }
}

