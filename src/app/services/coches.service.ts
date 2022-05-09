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

  getCoche(id: number): Observable<Coche> {
    const url = `${this.SERVER_URL}/${id}`;
    return this.http.get<Coche>(url).pipe(
      tap(_ => console.log(`fetched coche id=${id}`)),
    );
  }

  addCocheHttp(newCoche: Coche): Observable<Coche> {
    return this.http.post<Coche>(this.SERVER_URL, newCoche, this.httpOptions).pipe(
      tap((newCoche: Coche) => console.log(`added coche w/ id=${newCoche.id}`)),
    );
  }

  editCoche(coche: Coche): Observable<any> {
    return this.http.put(this.SERVER_URL, coche, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${coche.id}`))
    );
  }
}