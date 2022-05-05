import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { coche } from 'src/app/model/coche.model';

@Injectable({ providedIn: 'root' })
export class CochesService {

  SERVER_URL: string = "http://localhost:4200/api/coches";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCoches(): Observable<coche[]> {
    return this.http.get<coche[]>(this.SERVER_URL)
      .pipe(
        tap(_ => console.log('fetched coches'))
      );
  }


}