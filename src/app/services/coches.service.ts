import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Coche } from 'src/app/model/coche.model';

@Injectable({ providedIn: 'root' })
export class CochesService {

  SERVER_URL: string = "/api/coches";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCoches(): Observable<Coche[]> {
    return this.http.get<Coche[]>(this.SERVER_URL)
      .pipe(
        tap(_ => console.log('fetched coches'))
      );
  }

  addCocheHttp(newCoche: Coche): Observable<Coche> {
    return this.http.post<Coche>(this.SERVER_URL, newCoche, this.httpOptions).pipe(
      tap((newCoche: Coche) => console.log(`added hero w/ id=${newCoche.id}`)),
    );
  }
}